import React from "react";

const ExportContainer = () => {

    const data = [

      {
        buttonLabel: 'Header',

        fileName: 'Header.js'
      },
      {
        buttonLabel: 'TextBox',

        fileName: 'TextBox.js'
      },
      {
        buttonLabel: 'Spinner',

        fileName: 'Spinner.js'
      },
      {
        buttonLabel: 'Tooltip',

        fileName: 'Tooltip.js'
      },
      {
        buttonLabel: 'Paragraph',

        fileName: 'Paragraph.js'
      },

    ];


    const handleButtonClick = (fileName) => {

      fetch(`/api/download?file=${fileName}`)

        .then(response => response.blob())

        .then(blob => {

          const url = URL.createObjectURL(blob);

          const link = document.createElement('a');

          link.href = url;

          link.download = fileName;

          link.click();

          URL.revokeObjectURL(url);

        })

        .catch(error => {

          console.error('Error downloading file:', error);

        });

    };


    return (
      <div>
        <div>

          <h2>Export Component List</h2>

          <ul style={{ listStyleType:'none'}}>

            {data.map((item, index) => (

              <li key={index}>

                <button style={{ color: 'azure',borderStyle: 'hidden',borderRadius: '150px',padding: '10px',margin: '5px',fontWeight: "bold", height: 'auto',backgroundColor: 'cornflowerblue', cursor:'pointer'}} onClick={() => handleButtonClick(item.fileName)}>{item.buttonLabel}</button>

              </li>

            ))}

          </ul>

        </div>

      </div>
    )
  }

  export default ExportContainer