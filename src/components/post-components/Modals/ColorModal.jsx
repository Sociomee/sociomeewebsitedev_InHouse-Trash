import React from 'react'

const ColorModal = ({ colors,clickGradient }) => {
    return (
        <>
            <div className="modal fade" id="bgColorModel" tabIndex="-1" role="dialog" aria-labelledby="bgColorModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h2 className="modal-title font-weight-bold text-black" id="exampleModalLongTitle">Choose Background</h2>
                        <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <h3 className="h3 font-weight-bold text-black m-2">Popular</h3>
                        <div className="modal-body d-flex flex-column align-items-center">
                            <ul className="bg-color-list-block">
                                {
                                    colors && colors.map(({
                                        id,
                                        colorHexCode
                                    }) => {
                                        return <li key={id} data-bs-dismiss="modal" onClick={(e)=>clickGradient(e,colorHexCode)}><div className="color-bg-choose" role="button"  style={{ background: colorHexCode }}></div></li>
                                    })
                                }
                                
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColorModal
