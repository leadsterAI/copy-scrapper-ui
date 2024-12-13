// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import { io } from "socket.io-client"; // Import Socket.IO client

// const Scraper = () => {
//   const [file, setFile] = useState(null);
//   const [description, setDescription] = useState("");
//   const [maxSubPages, setMaxSubPages] = useState(5);
//   const [progress, setProgress] = useState(0);
//   const [results, setResults] = useState([]);
//   const [socketId, setSocketId] = useState("");

// useEffect(() => {
//   const socket = io("http://localhost:5007");

//   socket.on("progress", (data) => {
//     setProgress(data.progress);
//   });

//   socket.on("connect", () => {
//     setSocketId(socket.id);
//   });

//   return () => {
//     socket.disconnect();
//   };
// }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       alert("Please upload a CSV file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("description", description);
//     formData.append("maxSubPages", maxSubPages);
//      formData.append("socketId", socketId);

//     try {
//       const response = await axios.post(
//         "http://localhost:5007/api/scrape",
//         formData,
//         {
//           onUploadProgress: (progressEvent) => {
//             const percentCompleted = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             setProgress(percentCompleted);
//           },
//         }
//       );
//       setResults(response.data);
//       setProgress(100); // Complete
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred during the scraping process.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl mb-4">Web Scraper</h1>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-4">
//           <label className="block mb-2">Upload CSV File:</label>
//           <input
//             type="file"
//             accept=".csv"
//             onChange={handleFileChange}
//             required
//             className="border p-2 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Description:</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="border p-2 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Max Subpages to Scrape:</label>
//           <input
//             type="number"
//             value={maxSubPages}
//             onChange={(e) => setMaxSubPages(Number(e.target.value))}
//             required
//             className="border p-2 rounded w-full"
//             min="1"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Start Scraping
//         </button>
//       </form>
//       {progress > 0 && (
//         <div className="mb-4">
//           <p>Progress: {progress}%</p>
//         </div>
//       )}
//       {results.length > 0 && (
//         <div>
//           <h2 className="text-xl mb-2">Results:</h2>
//           <table className="min-w-full border">
//             <thead>
//               <tr>
//                 <th className="border">URL</th>
//                 <th className="border">ChatGPT Response</th>
//               </tr>
//             </thead>
//             <tbody>
//               {results.map((result, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">{result.url}</td>
//                   <td className="border p-2">{result.chatGptResponse}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Scraper;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { io } from "socket.io-client";

// const Scraper = () => {
//   const [file, setFile] = useState(null);
//   const [description, setDescription] = useState("");
//   const [maxSubPages, setMaxSubPages] = useState(5);
//   const [progress, setProgress] = useState(0);
//   const [results, setResults] = useState([]);
//   const [socketId, setSocketId] = useState("");
//   const [downloadLink, setDownloadLink] = useState("");

//   useEffect(() => {
//     const socket = io("http://localhost:5007");

//     socket.on("progress", (data) => {
//       setProgress(data.progress);
//     });

//     socket.on("connect", () => {
//       setSocketId(socket.id);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       alert("Please upload a CSV file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("description", description);
//     formData.append("maxSubPages", maxSubPages);
//     formData.append("socketId", socketId);

//     try {
//       const response = await axios.post(
//         "http://localhost:5007/api/scrape",
//         formData,
//       );

//       console.log({response})
//       setDownloadLink(
//         `http://localhost:5007/api/download/${response.data.socketId}.csv`
//       );
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred during the scraping process.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Web Scraper</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Upload CSV File:</label>
//           <input
//             type="file"
//             accept=".csv"
//             onChange={handleFileChange}
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Description:</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Max Subpages to Scrape:</label>
//           <input
//             type="number"
//             value={maxSubPages}
//             onChange={(e) => setMaxSubPages(Number(e.target.value))}
//             required
//             style={styles.input}
//             min="1"
//           />
//         </div>
//         <button type="submit" style={styles.button}>
//           Start Scraping
//         </button>
//       </form>

//       {progress > 0 && (
//         <div style={styles.progressContainer}>
//           <p>Progress: {progress}%</p>
//         </div>
//       )}

//       {downloadLink && (
//         <div style={styles.downloadContainer}>
//           <a href={downloadLink} download style={styles.downloadButton}>
//             Download CSV File
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "800px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   },
//   header: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//   },
//   form: {
//     marginBottom: "20px",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     boxSizing: "border-box",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   progressContainer: {
//     marginBottom: "20px",
//   },
//   results: {
//     marginTop: "20px",
//   },
//   resultsHeader: {
//     fontSize: "1.5rem",
//     marginBottom: "10px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
//   tableHeader: {
//     border: "1px solid #ddd",
//     padding: "10px",
//     backgroundColor: "#f2f2f2",
//   },
//   tableCell: {
//     border: "1px solid #ddd",
//     padding: "10px",
//   },
//   downloadContainer: {
//     marginTop: "20px",
//   },
//   downloadButton: {
//     padding: "10px 20px",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "5px",
//   },
// };

// export default Scraper;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { io } from "socket.io-client";
// import Papa from "papaparse";

// const Scraper = () => {
//   const [file, setFile] = useState(null);
//   const [description, setDescription] = useState("");
//   const [maxSubPages, setMaxSubPages] = useState(5);
//   const [progress, setProgress] = useState(0);
//   const [downloadLink, setDownloadLink] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [socketId, setSocketId] = useState("");
//   const [headers, setHeaders] = useState([]); // For storing CSV headers
//   const [selectedColumn, setSelectedColumn] = useState(""); // For the selected column

//   useEffect(() => {
//     const socket = io(import.meta.env.VITE_API_URL);

//     socket.on("progress", (data) => {
//       setProgress(data.progress);
//     });

//     socket.on("connect", () => {
//       setSocketId(socket.id);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFile(file);

//     // Parse the CSV to extract the headers
//     Papa.parse(file, {
//       complete: function (results) {
//         const parsedHeaders = results.data[0]; // First row as header
//         setHeaders(parsedHeaders);
//         setSelectedColumn(parsedHeaders[0]); // Default to first column
//       },
//       header: false,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       alert("Please upload a CSV file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("description", description);
//     formData.append("maxSubPages", maxSubPages);
//     formData.append("socketId", socketId);
//     formData.append("urlColumn", selectedColumn);

//     setIsSubmitting(true);
//     setProgress(0.5);
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/scrape`,
//         formData
//       );

//       setDownloadLink(
//         `${import.meta.env.VITE_API_URL}/api/download/${
//           response.data.socketId
//         }.csv`
//       );
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred during the scraping process.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleNewUpload = () => {
//     setFile(null);
//     setDescription("");
//     setMaxSubPages(5);
//     setProgress(0);
//     setDownloadLink("");
//     setHeaders([]); // Reset headers
//     setSelectedColumn("");
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md px-10 min-w-[400px]">
//       <h1 className="text-2xl font-bold mb-4 text-center">List Fixer</h1>
//       {!isSubmitting && !downloadLink && (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col">
//             <label className="font-medium mb-1">Upload CSV File:</label>
//             <input
//               type="file"
//               accept=".csv"
//               onChange={handleFileChange}
//               required
//               className="border border-gray-300 rounded-md p-2"
//             />
//           </div>
//           {headers.length > 0 && (
//             <div className="flex flex-col">
//               <label className="font-medium mb-1">Select URL Column:</label>
//               <select
//                 value={selectedColumn}
//                 onChange={(e) => setSelectedColumn(e.target.value)}
//                 className="border border-gray-300 rounded-md p-2"
//               >
//                 {headers.map((header, index) => (
//                   <option key={index} value={header}>
//                     {header}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           <div className="flex flex-col">
//             <label className="font-medium mb-1">Description:</label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//               className="border border-gray-300 rounded-md p-2"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="font-medium mb-1">Max Subpages to Scrape:</label>
//             <input
//               type="number"
//               value={maxSubPages}
//               onChange={(e) => setMaxSubPages(Number(e.target.value))}
//               required
//               className="border border-gray-300 rounded-md p-2"
//               max={15}
//               min={1}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//           >
//             Start Scraping
//           </button>
//         </form>
//       )}

//       {progress > 0 && !downloadLink && (
//         <div className="mt-28 min-w-[400px] min-h-[300px]">
//           <p>Progress: {progress}%</p>
//           <div className="h-2 bg-gray-300 rounded-md mt-1">
//             <div
//               style={{
//                 width: `${progress}%`,
//               }}
//               className="h-full bg-blue-500 transition-all duration-300 ease-in-out rounded-md"
//             />
//           </div>
//         </div>
//       )}

//       {downloadLink && (
//         <div className="mt-28 min-w-[400px] min-h-[300px] text-center flex flex-col gap-8">
//           <a
//             href={downloadLink}
//             download
//             className="inline-block py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
//           >
//             Download CSV File
//           </a>
//           <button
//             onClick={handleNewUpload}
//             className=" inline-block py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
//           >
//             Upload New List
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Scraper;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Papa from "papaparse";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { FiLogOut } from "react-icons/fi";

const Scraper = (props) => {
  const { setIsLoggedIn } = props;
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [maxSubPages, setMaxSubPages] = useState(5);
  const [progress, setProgress] = useState(0);
  const [downloadLink, setDownloadLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [socketId, setSocketId] = useState("");
  const [headers, setHeaders] = useState([]); // For storing CSV headers
  const [selectedColumn, setSelectedColumn] = useState(""); // For the selected column
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL);

    socket.on("progress", (data) => {
      setProgress(data.progress);
    });

    socket.on("connect", () => {
      setSocketId(socket.id);
    });
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
    if (!user) {
      const localUser = JSON.parse(localStorage.getItem("user"));
      setUserEmail(localUser.email);
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    // Parse the CSV to extract the headers
    Papa.parse(file, {
      complete: function (results) {
        const parsedHeaders = results.data[0]; // First row as header
        setHeaders(parsedHeaders);
        setSelectedColumn(parsedHeaders[0]); // Default to first column
      },
      header: false,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    formData.append("maxSubPages", maxSubPages);
    formData.append("socketId", socketId);
    formData.append("urlColumn", selectedColumn);
    formData.append("email", userEmail);

    setIsSubmitting(true);
    setProgress(0);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/scrape`,
        formData,
        {
          timeout: 60000 * 250, // Set timeout to 2 hours
        }
      );

      setDownloadLink(
        `${import.meta.env.VITE_API_URL}/api/download/${
          response.data.socketId
        }.csv`
      );
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during the scraping process.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewUpload = () => {
    setFile(null);
    setDescription("");
    setMaxSubPages(5);
    setProgress(0);
    setDownloadLink("");
    setHeaders([]); // Reset headers
    setSelectedColumn("");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      <div className=" p-4">
        {/* Header */}
        <header className="flex justify-between items-center bg-white-800 text-white py-3 px-6 rounded-md mb-6 shadow-lg">
          <h1 className="text-4xl font-bold text-black">Fix Your List</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white transition-all duration-200"
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </header>
      </div>
      <div className="max-w-6xl mx-auto p-12 px-24 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6"></div>

        {!isSubmitting && !downloadLink && (
          <form onSubmit={handleSubmit} className="space-y-6 w-[56rem]">
            <div className="flex flex-col">
              <label className="text-lg mb-2 font-medium">
                Upload Your List (In CSV File Format)
              </label>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                required
                className="border border-gray-300 rounded-md p-3"
              />
            </div>

            {headers.length > 0 && (
              <div className="flex flex-col">
                <label className="text-lg mb-2 font-medium">
                  Select URL Column
                </label>
                <select
                  value={selectedColumn}
                  onChange={(e) => setSelectedColumn(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                >
                  {headers.map((header, index) => (
                    <option key={index} value={header}>
                      {header}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex flex-col">
              <label className="text-lg mb-2 font-medium">
                Max Subpages to Scrape:
              </label>
              <input
                type="number"
                value={maxSubPages}
                onChange={(e) => setMaxSubPages(Number(e.target.value))}
                required
                className="border border-gray-300 rounded-md p-3"
                max={15}
                min={1}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg mb-2 font-medium">
                Enter description for what is a match
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md p-3"
                placeholder="Example: Companies that sell physical products"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium text-lg"
            >
              Submit
            </button>
          </form>
        )}

        {progress >= 0 && isSubmitting && !downloadLink && (
          <div className="text-center mt-32">
            <p className="text-lg mb-4">Processing...</p>
            <p className="text-xl font-semibold mb-4">
              {progress.toFixed(2)}% Completed!
            </p>
            <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden mb-4">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-blue-600"
              />
            </div>
            {progress === 100 && !downloadLink && (
              <p>Please wait we are sending mail</p>
            )}
          </div>
        )}

        {downloadLink && (
          <div className="text-center mt-32 flex flex-col">
            <a
              href={downloadLink}
              download
              className="py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-medium text-lg inline-block"
            >
              Download CSV File
            </a>
            <button
              onClick={handleNewUpload}
              className="py-3 px-6 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition font-medium text-lg inline-block mt-4"
            >
              Upload New List
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Scraper;
