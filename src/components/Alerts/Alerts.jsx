import React from "react";
import { useState } from "react";

function Alerts({ searchTerm }) {
  const data = [
    {
      title: "Sheer",
      description: "Cleartext Transmittion of password via Email",
      disclosed: "2hr ago",
      disclosedBy: "rohitkumar",
      sensitiveInfo: "Cleartext Transmittion of Sensitive Information",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iure est suscipit nulla enim cumque!",
      like: 23,
      badge: "Low",
      price: "$2022",
      status: "Resolved",
    },
    {
      title: "Apex",
      description: "Cleartext Transmittion of password via Email",
      disclosed: "7hr ago",
      disclosedBy: "rohitkumar",
      sensitiveInfo: "Cleartext Transmittion of Sensitive Information",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iure est suscipit nulla enim cumque!",
      like: 77,
      badge: "High",
      price: "$22",
      status: "Resolved",
    },
    {
      title: "Locality",
      description: "Cleartext Transmittion of password via Email",
      disclosed: "2hr ago",
      disclosedBy: "rohitkumar",
      sensitiveInfo: "Cleartext Transmittion of Sensitive Information",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iure est suscipit nulla enim cumque!",
      like: 23,
      badge: "High",
      price: "$298",
      status: "Resolved",
    },
    {
      title: "Revive Adserver",
      description: "Cleartext Transmittion of password via Email",
      disclosed: "2hr ago",
      disclosedBy: "rohitkumar",
      sensitiveInfo: "Cleartext Transmittion of Sensitive Information",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iure est suscipit nulla enim cumque!",
      like: 23,
      badge: "High",
      price: "$298",
      status: "Resolved",
    },
  ];

  const filteredData = data.filter((item) => {
    const values = Object.values(item).map((value) =>
      typeof value === "string" ? value.toLowerCase() : ""
    );

    return values.some((value) => value.includes(searchTerm.toLowerCase()));
  });
  return (
    <div className="table-responsive">
      {filteredData.length > 0 ? (
        <table className="table">
          <tbody>
            {filteredData.map((item, index) => (
              <tr className="border" key={index}>
                <td className="text-center" width={100}>
                  <span>
                    <i className="fa fa-thumbs-up"></i>
                  </span>{" "}
                  <br /> {item.like}
                </td>
                <td>
                  <p className="mb-0">
                    {" "}
                    <i className="fa fa-building text-primary"></i> {item.title}
                  </p>
                  <p className="mb-0 text-primary">
                    <strong>&#x2022; {item.description}</strong>
                  </p>
                  <span>
                    <small>
                      Disclosed {item.disclosed} by{" "}
                      <span className="text-primary">{item.disclosedBy}</span>
                    </small>
                  </span>
                  <span className="ml-5">
                    <small>{item.sensitiveInfo}</small>
                  </span>
                  <br />
                  <p>
                    <small>{item.text}</small>
                  </p>
                </td>
                <td width={350}>
                  <div className="row">
                    <div className="col-4">
                      <span className="badge badge-primary">{item.badge}</span>
                    </div>
                    <div className="col-4">
                      <span className="text-dark">{item.price}</span>
                    </div>
                    <div className="col-4">
                      <span className="text-dark">&#x2022; {item.status}</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="card">
          <div className="card-body">
            <p className="text-center">No reports found.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alerts;
