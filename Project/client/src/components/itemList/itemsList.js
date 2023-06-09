// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ".//../../CSS/items.css";
// const Record = (props) => (
//   <tr>
//     <tr>Title</tr>
//     <tr>{props.record.title}</tr>
//     <tr>Category</tr>
//     <tr>{props.record.category}</tr>
//     <tr>Quantity</tr>
//     <tr>{props.record.quantity}</tr>
//     <tr>Location</tr>
//     <tr>{props.record.location}</tr>
//     <tr>Description</tr>
//     <tr>{props.record.description}</tr>
//     <tr>Listing posted on</tr>
//     <tr>{props.record.listingDate}</tr>
//     <tr>by</tr>
//     <tr>{props.record.userAccount}</tr>
//     <tr>Contact information</tr>
//     <tr>Email: {props.record.contactInfo?.email}</tr>
//     <tr>Phone Number:{props.record.contactInfo?.number}</tr>
//     <tr>Image(s)</tr>
//     <img id="base64image" src={props.record.images64} />
//     <tr>Product ID</tr>
//     <tr>{props.record.product_id}</tr>
//     <tr>
//       <button>Contact Owner</button>
//     </tr>
//     <tr>
//       <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
//         Edit
//       </Link>{" "}
//       |
//       <button
//         className="btn btn-link"
//         onClick={() => {
//           props.deleteRecord(props.record._id);
//         }}
//       >
//         Delete
//       </button>
//     </tr>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);

//   // This method fetches the records from the database.
//   useEffect(() => {
//     async function getRecords() {
//       const response = await fetch(
//         `http://localhost:8000/api/item_routes/items`
//       );
//       if (!response.ok) {
//         const message = `An error occured: ${response.statusText}`;
//         window.alert(message);
//         return;
//       }
//       const records = await response.json();
//       setRecords(records);
//     }
//     getRecords();
//     return;
//   }, [records.length]);

//   // This method will delete a record
//   async function deleteRecord(id) {
//     await fetch(`http://localhost:8000/api/item_routes/item/${id}`, {
//       method: "DELETE",
//     });

//     const newRecords = records.filter((el) => el._id !== id);
//     setRecords(newRecords);
//   }

//   // This method will map out the records on the table
//   function recordList() {
//     console.log("records", records);
//     return records.map((record) => {
//       console.log("record", record);
//       return (
//         <Record
//           record={record}
//           deleteRecord={() => deleteRecord(record._id)}
//           key={record._id}
//           /* ALT: these fix the object/component error but may result in listings not being displayed
//           record={record.toString()}
//           deleteRecord={() => deleteRecord(record._id).toString()}
//           key={record._id.toString()}
//           */
//         />
//       );
//     });
//   }

//   // This following section will display the table with the records of individuals.
//   return (
//     <div>
//       <h3>All Listings</h3>
//       <table className="table table-striped" style={{ marginTop: 20 }}>
//         <tbody>{recordList()}</tbody>
//       </table>
//     </div>
//   );
// }
