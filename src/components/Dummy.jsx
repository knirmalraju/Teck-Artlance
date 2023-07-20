import React from 'react'
import styled from 'styled-components'
//import horizon from "./videos/Horizon.mp4"

const Container = styled.div`
    height : 100vh;
    position : relative;
`;
/*
const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        projectFirestore.collection('Hp_games').get().then((snapshot)=>{
            if(snapshot.empty){
                setError('No content');
                setIsPending(false);
            } else {
                let results = [];
                snapshot.docs.forEach(doc =>{
                    results.push({ id : doc.id, ...doc.data() })
                })
                setData(results)
                setIsPending(false)
            }
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        })
        if(isPending && error){
            console.log(isPending, error);
        }else{
            console.log(data);
        }
    }, [data,isPending,error])

    //2nd
    const [alldocs, setAllDocs] = useState([]);
        projectFirestore.collection("Hp_games").get().then((snapshot)=> {
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc)=>{
                    setAllDocs((prev)=>{
                        return [...prev, doc.data()];
                    });
                });
            }
        });
        
        console.log("alldocs" + alldocs);
*/
const Dummy = () => {
  return (
    <div>
        <Container>
        <video autoPlay loop muted
            style={{
                height : "100%",
                width : "100%",
                objectFit : "cover",
                top : "0",
                left : "0",
                display : "block",
                position : "absolute",
                zIndex : "-1"
            }}
        >
            <source src= "./videos/Horizon.mp4" type="video/mp4"/>
        </video>
        <video loop autoPlay muted>
        <source
          src="./videos/Horizon.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        </Container>
    </div>
  )
}

export default Dummy

/*
import { v4 as uuidv4 } from "uuid";

export const dataSlider = [
  {
    id: uuidv4(),
    bgimg : "url('./images/teamitem_1.jpg')",
    tname : "Game Art",
    location : "Puducherry",
    njob : 3,
  },
  {
    id: uuidv4(),
    bgimg : "url('./images/teamitem_2.jpg')",
    tname : "Engineering",
    location : "Puducherry",
    njob : 3,
  },
  {
    id: uuidv4(),
    bgimg : "url('./images/teamitem_3.jpg')",
    tname : "Data science",
    location : "Puducherry",
    njob : 3,
  },
  {
    id: uuidv4(),
    bgimg : "url('./images/teamitem_4.jpg')",
    tname : "Marketing",
    location : "Puducherry",
    njob : 3,
  },
  {
    id: uuidv4(),
    bgimg : "url('./images/teamitem_5.jpg')",
    tname : "Product Management",
    location : "Puducherry",
    njob : 3,
  },
  {
    id: uuidv4(),
    bgimg : "url('./images/teamitem_6.jpg')",
    tname : "studio Engineering",
    location : "Puducherry",
    njob : 3,
  },
];*/
{/*
const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        console.log("nextslide");
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        console.log("prevslide");
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

<SliderTeamcards>
                <Arrow direction="left" onClick={prevSlide}>
                    <ArrowBackIos/>
                </Arrow>
                {dataSlider.map((obj, index) => {
                    return(
                        <Slider key={obj.id} >
                            <SlideImage src={`/images/teamitem_${index + 1}.jpg`}></SlideImage>
                        </Slider>
                    )
                })}
                <Arrow direction="right" onClick={nextSlide}>
                    <ArrowForwardIos/>
                </Arrow>

            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id}>
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
                    <SlideImage bgimg={url(`/images/teamitem_${index + 1}.jpg`)}></SlideImage>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
                </div>*/}