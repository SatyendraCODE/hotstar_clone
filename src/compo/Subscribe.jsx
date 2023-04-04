import React from 'react';
import './Subscribe.css'
import Header from '../header/headerofsub'

const Subscribe = () => {
    return (
        <>
            <Header/>
            <div className="container-fluid bg">
                <div className="row">
                    <div className="col ">
                        <h3>Subscribe to watch all content on Disney+ Hotstar</h3>
                        <div className="box">
                            <table>
                                <tr>
                                    <td colSpan={1}></td>
                                    <td className='mid back-chnge clr-chng'> Super</td>
                                    <td className='mid'>Premium</td>
                                </tr>
                                <tr>
                                    <td rowSpan={1} className='lef'>All contect
                                        <br />
                                        <span className='movie'>Movies, live sports, TV, Specials</span>
                                    </td>
                                    <td className='back-chnge'><i className="fa-solid fa-check"></i></td>
                                    <td ><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Watch on TV or Laptop</td>
                                    <td className='back-chnge'><i className="fa-solid fa-check"></i></td>
                                    <td ><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Ads free movies and shows (except sports)</td>
                                    <td className='back-chnge'><i className="fa-solid fa-xmark"></i></td>
                                    <td ><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Number of devices that can be logged in</td>
                                    <td className='back-chnge'>2</td>
                                    <td >4</td>
                                </tr>
                                <tr>
                                    <td className='lef'>Max video quality</td>
                                    <td className='back-chnge'>Full HD(1080p)</td>
                                    <td >4K (2160p)</td>
                                </tr>
                                <tr>
                                    <td className='lef'>Max audio quality</td>
                                    <td className='back-chnge bor-rad'>Dolby 5.1</td>
                                    <td >Dolby 5.1</td>
                                </tr>
                            </table>
                            <div className="plans">
                                <button className="plans-box clr-chng2 poi-rel">
                                    <p>Super</p>
                                    <p>899/<span>Year</span></p>
                                    <i class="fa-solid fa-check poi-ab check-mark"></i>
                                </button>
                                <button className="plans-box">
                                    <p>Premium</p>
                                    <p>1499/<span>Year</span></p>
                                </button>
                                <button className="plans-box">
                                    <p>Premium</p>
                                    <p>299/<span>Month</span></p>
                                </button>
                            </div>
                            <button className='btn btn-2'>CONTINUE WITH SUPER <i className="fa-solid fa-chevron-right"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;