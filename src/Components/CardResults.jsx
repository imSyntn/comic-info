import React, {useState, useEffect} from 'react'
import './CardResults.scss';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { SiPowerautomate } from "react-icons/si";
import { motion } from 'framer-motion';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CardResults = () => {
    const[clickedData, setClickedData]=useState(null);
    const params = useParams();
    const api_key = process.env.REACT_APP_API;

    const idFetch = async ()=>{
        try {
            setClickedData(null);
            const idReq = await fetch(`https://superheroapi.com/api.php/${api_key}/${params.id}`);
            const idRes = await idReq.json();
            setClickedData(idRes);
        } catch (error) {
            alert("Something went wrong");
        }
    }

    useEffect(()=>{
        idFetch();
    },[params])
    
  return (
    <motion.div
     initial={{
        scale: 0,
        opacity: 0.1,
     }}
     animate={{
        scale: 1,
        opacity: 1,
     }}
     transition={{
        duration: 0.1,
     }}
     className='CardResults'>
        <Link to={'/'}>
            <BsFillArrowLeftCircleFill />
        </Link>

        {
            clickedData?
            (<>
                <img src={`${clickedData.image.url}`} alt={`${clickedData.name}`} />
            
                <div className="fetched-data">
                    <div className="fetched-data-header">
                            <h2 className='hero-name'>{clickedData.name}</h2>
                        </div>
        
                    <div className="fetched-data-details">
                            <div className='id-class' id="Powerstats">
                                <h2>Powerstats</h2>
        
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Intelligence</p>
                                </div>
                                <p>{clickedData.powerstats.intelligence}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Durabiliy</p>
                                </div>
                                <p>{clickedData.powerstats.durability}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Power</p>
                                </div>
                                <p>{clickedData.powerstats.power}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Combat</p>
                                </div>
                                <p>{clickedData.powerstats.combat}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Speed</p>
                                </div>
                                <p>{clickedData.powerstats.speed}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Strength</p>
                                </div>
                                    <p>{clickedData.powerstats.strength}</p>
                                </div>
        
                        </div>
                        <div className='id-class' id="Biography">
                            <h2>Biography</h2>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Full Name</p>
                                </div>
                                <p>{clickedData.biography['full-name']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Place of Birth</p>
                                </div>
                                <p>{clickedData.biography['place-of-birth']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Alignment</p>
                                </div>
                                <p>{clickedData.biography.alignment}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>First Appearance</p>
                                </div>
                                <p>{clickedData.biography['first-appearance']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Publisher</p>
                                </div>
                                <p>{clickedData.biography.publisher}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Alter Egos</p>
                                </div>
                                <p>{clickedData.biography['alter-egos']}</p>
                            </div>
                        </div>
                        <div className='id-class' id="Appearance">
                            <h2>Appearance</h2>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Gender</p>
                                </div>
                                <p>{clickedData.appearance.gender}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Eye Color</p>
                                </div>
                                <p>{clickedData.appearance['eye-color']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Hair Color</p>
                                </div>
                                <p>{clickedData.appearance['hair-color']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Race</p>
                                </div>
                                <p>{clickedData.appearance.race}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Height</p>
                                </div>
                                <p>{`${clickedData.appearance.height[0]}ft`}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Weight</p>
                                </div>
                                <p>{clickedData.appearance.weight[1]}</p>
                            </div>
                        </div>
                        <div className='id-class' id="Others">
                            <h2>Others</h2>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Base</p>
                                </div>
                                <p>{clickedData.work.base}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Occupation</p>
                                </div>
                                <p>{clickedData.work.occupation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
            :
            // 
            (<>
                <div className='img-before-load'>
                    {<Skeleton style={{
                        borderRadius: '20px',
                    height: '493px',
                    width: '362px'
                    }} />}
                </div>
            
                <div className="fetched-data">
                    <div>
                        {<Skeleton style={{
                            height: '40px'
                        }} />}
                    </div>
        
                    <div className="fetched-data-details">
                        <div className='id-class' id="Powerstats">
                            <h2>{<Skeleton style={{
                                width: '200px',
                                height: '40px'
                            }} />}</h2>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '102px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '30px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '83px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '30px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '66px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '30px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '78px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '30px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '65px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '30px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '82px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '30px'
                                }} />}</p>
                            </div>
        
                        </div>
                        <div className='id-class' id="Biography">
                            <h2>{<Skeleton style={{
                                width: '200px',
                                height: '40px'
                            }} />}</h2>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '93px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '130px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '117px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '130px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '93.5px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '50px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '142px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '646px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '87px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '107px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '94px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '145px'
                                }} />}</p>
                            </div>
                        </div>
                        <div className='id-class' id="Appearance">
                            <h2>{<Skeleton style={{
                                width: '200px',
                                height: '40px'
                            }} />}</h2>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '73px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '46px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '88px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '46px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '93px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '46px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '57px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '133px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '67px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '35px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">

                                    <p>{<Skeleton style={{
                                                width: '71px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '48px'
                                }} />}</p>
                            </div>
                        </div>
                        <div className='id-class' id="Others">
                            <h2>{<Skeleton style={{
                                width: '200px',
                                height: '40px'
                            }} />}</h2>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '57px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '240px'
                                }} />}</p>
                            </div>
                            <div className='AbilityCard-before'>
                                <div className="ability-icon-name-before">
                                    
                                    <p>{<Skeleton style={{
                                                width: '102px',
                                                height: '19px'
                                            }} />}
                                    </p>
                                </div>
                                <p>{<Skeleton style={{
                                    width: '240px'
                                }} />}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
        }
    </motion.div>
  )
}

export default CardResults