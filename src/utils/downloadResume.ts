export const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual URL of your resume file
    const resumeUrl = '/RushilShah-Resume.pdf';
    // Create a temporary link element
    const link = document.createElement('a');
    // Set the href attribute to the resume URL
    link.href = resumeUrl;
    // Set the download attribute to force the browser to download the file
    link.setAttribute('download', 'RushilShah-Resume.pdf');
    // Programmatically click the link to trigger the download
    document.body.appendChild(link);
    link.click();
    // Remove the link element from the DOM
    document.body.removeChild(link);
  };