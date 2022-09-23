import React from 'react'

// mui dailog box
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ReportPostModal = ({ modal, setModal, reportPostBody, setReportPostBody, setOpen, setAlert }) => {

    // post report function
    const postReportHandler = () => {
        if (!reportPostBody.comment) {
            setOpen(true);
            setAlert({ sev: "error", content: "Please Enter Reason !", });
        }
        else {
            console.log(reportPostBody)
        }
    }

    return (
        <>
            {/* Mui Modal box content */}
            <Dialog open={modal} onClose={false} scroll={'body'}>
                <DialogTitle>Report</DialogTitle>
                <DialogContent>
                    <h3 className='font-bold'>Please select a problem</h3>
                    <DialogContentText>
                        If someone is in immediate danger, get help before <br/>
                        reporting to Facebook. Don't wait
                    </DialogContentText>
                    {/* <div className="card-block-box"> */}
                    <ul className="searchfiler-list mt-2">
                        {
                            ['demo', 'demo2', 'demo3'].map((hobbi) => {
                                return (
                                    <li key={hobbi} >
                                        <div className="form-check checkbox_animated2">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id={hobbi}

                                            />
                                            <label className="form-check-label d-flex justify-content-between" htmlFor={hobbi}>{hobbi}</label>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* </div> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setModal(false)}>Cancel</Button>
                    <Button onClick={postReportHandler}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ReportPostModal
