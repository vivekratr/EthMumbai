// import  { useState } from 'react';
// import ColorExtractor from 'react-color-extractor';

// const ColorExtract = () => {
//   const [image, setImage] = useState(null);
//   const [colors, setColors] = useState([]);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleColorsExtraction = (colorPalette) => {
//     setColors(colorPalette);
//   };

//   return (
//     <div>
//       <h2>Image Color Extractor</h2>

//       {/* Input for uploading image */}
//       <input type="file" accept="image/*" onChange={handleImageChange} />

//       {/* Display the uploaded image */}
//       {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />}

//       {/* Color extraction */}
//       {image && (
//         <ColorExtractor getColors={(colors) => handleColorsExtraction(colors)}>
//           <img src={image} alt="Color Extraction" style={{ display: 'none' }} />
//         </ColorExtractor>
//       )}

//       {/* Display extracted colors */}
//       {colors.length > 0 && (
//         <div>
//           <h3>Extracted Colors:</h3>
//           <ul>
//             {colors.map((color, index) => (
//               <li key={index} style={{ backgroundColor: color, padding: '10px', margin: '5px' }}>
//                 {color}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ColorExtract;
