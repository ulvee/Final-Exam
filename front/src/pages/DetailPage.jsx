import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { CgGym } from 'react-icons/cg';


function DetailPage() {
  const params = useParams();
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await axios.get(`http://localhost:8080/cards/${params.id}`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-center pt-[100px]">
        <Helmet>
          <title>Detail Page</title>
          <meta name="description" content="Helmet application" />
        </Helmet>

        <div className="flex flex-col items-center justify-center w-[370px] px-[30px] py-[30px] gap-[50px] shadow-md">
          <div>
            <CgGym className="w-[50px] h-[50px] text-teal-500" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-center font-[600] text-[18px]">{data.title}</h2>
            <p className="text-center font-[600]">{data.description}</p>
            <span className="text-center">{data.price}</span>
          </div>
          <Link to={"/"}>
            <button className="w-[150px] text-[white] uppercase font-[700] py-[15px] bg-[green] px-[20px] rounded-[10px]">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
