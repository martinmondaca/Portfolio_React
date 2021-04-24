import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "./style.css"

// import './Sample.less';

import pdfFile from './resume2020.pdf';

export default function Resume() {

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <h3 className="pageTitle center-align container">Resume</h3>

            <div className="row col l4 m4 s4 offset-l4 offset-m2 offset-s0 resume">
                <div className="row col l4 m4 s4 offset-l4 offset-m2 offset-s0 z-depth-4"
                >
                    <a href={pdfFile} rel="noopener noreferrer" target="_blank">
                        <Document
                            file={pdfFile}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </a>


                </div>

                <div className="container">
                    <div className="container row col l4 m4 s6 offset-l4 offset-m4 offset-s3 center">
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="Pre btn-small red lighten-1"

                        >
                            <i className="material-icons">chevron_left</i>
                        </button>
                        {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}

                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                            className="Next btn-small green accent-3"
                        >
                            <i className="material-icons">chevron_right</i>
                        </button>

                    </div>
                </div>

            </div>
        </ >
    );
}