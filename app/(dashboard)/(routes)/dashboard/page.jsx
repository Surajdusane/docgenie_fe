"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FileInput from "@/components/global/FileInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {

  const router = useRouter();
 
  const [loading, setLoading] = useState(false);
  const [loadingd, setLoadingd] = useState(false);
  const [download, setDownload] = useState(false);

  const handleSubmit = async() => {
    setLoading(true);
    try {
      const genrateDocs = await axios.get("https://docgenie.onrender.com/generate-docs/", {
        params: {
          folder_name: "output"
        }
      })
      setDownload(true)
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  const handleDownload = async () => {
    setLoadingd(true);
    try {
      const response = await axios.get("https://docgenie.onrender.com/convert-to-pdf-zip/", {
        params: {
          folder_name: "output"
        }
      });
      const file = new Blob([response.data], { type: 'application/zip' });

      // Create a link element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file); // Create an object URL for the file
      link.download = 'pdfs.zip'; // Set the file name for the download

      // Append the link to the DOM, trigger the download, and remove the link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingd(false);
    }
  };
  
  
  return (
    <div className="">
      <div>
        <h2 className="text-5xl text-center py-10 font-bold text-slate-800">
          Docgenie
        </h2>
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col gap-2">
          <Label className="text-2xl text-slate-600 font-semibold">
            Upload Template
          </Label>
          <FileInput name="template_file" endpoint={"https://docgenie.onrender.com/upload-template/"} />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-2xl text-slate-600 font-semibold">
            Upload CSV
          </Label>
          <FileInput name="csv_file" endpoint={"https://docgenie.onrender.com/upload-csv/"} />
        </div>
      </div>
      <div className="flex justify-center items-center px-8 gap-4 mt-10">
        <div>
        {loading ? (
          <Button disabled variant="custom"  className="px-6 py-6 font-medium text-lg">
            <Loader2 className="animate-spin"  />
            Please wait
          </Button>
        ) : (
          <Button onClick={handleSubmit} variant="custom" className="px-6 py-6 font-medium text-lg">
            Genrate
          </Button>
        )}
        </div>
        {
          download && (
            <div>
        {loadingd ? (
          <Button disabled variant="custom"  className="px-6 py-6 font-medium text-lg">
            <Loader2 className="animate-spin"  />
            Please wait
          </Button>
        ) : (
          <Button onClick={handleDownload} variant="custom" className="px-6 py-6 font-medium text-lg">
            Download
          </Button>
        )}
        </div>
          )
        }
      </div>
    </div>
  );
};

export default page;
