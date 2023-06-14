import React from "react";

const DownloadButton = ()=> {

    const handleDownload = () => {
        const downloadLink = document.createElement('a')
        downloadLink.href = "/CVEliasYanzon.pdf"
        downloadLink.download = "CVEliasYanzon.pdf"
        downloadLink.click();
    }
    return(
        <button
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick={() => handleDownload()}
    >
      CV
    </button>
    )
}

export default DownloadButton;