import React, { useState, useEffect } from "react";
import "./About.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { urlFor,client } from "../../client";
import {AppWrap,MotionWrap} from '../../wrapper';

// const abouts = [
//   {
//     title: "web devlopment",
//     description: "I am learning web devlopment",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Programmer",
//     description: "I am learning Programmer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Machine Learning",
//     description: "I am learning Machine Learning",
//     imgUrl: images.about03,
//   },
//   { title: "AI", description: "I am want to learn AI", imgUrl: images.about04 },
// ];

const about = () => {
  const [abouts,setAbouts] = useState([]);
  
  useEffect(()=>{
    const query = '*[_type=="abouts"]';

    client.fetch(query)
      .then((data)=> setAbouts(data)
      )
  },[]);



  return (
    <>
      <h2 className="head-text">I know that <span>Good Devlopment </span><br/> means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(about,'app__about'),
  'about',
  "app__whitebg"
  );
