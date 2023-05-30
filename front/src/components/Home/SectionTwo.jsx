import React from "react";
import { CgGym } from "react-icons/cg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SectionTwo() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/cards");
    setData(res.data);
  };

  const delData = async (id) => {
    await axios.delete(`http://localhost:8080/cards/${id}`);
    await getData();
  };

  const checkData = (e) => {
    setValue(e.target.value);
  };

  const toggle = () => {
    setSortAsc((prevSortAsc) => !prevSortAsc);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-[600] text-[36px]">
            We care about what we offer
          </h2>
          <p className="font-[300]">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="flex justify-between gap-[50px] max-w-[1000px] mx-auto mt-[50px]">
          <button
            onClick={toggle}
            className="py-[10px] px-[25px] bg-[teal] text-[white] uppercase font-bold rounded-[10px]"
          >
            Filter by Price
          </button>
          <input
            type="text"
            placeholder="Search by name..."
            value={value}
            onChange={checkData}
            className="border-[2px] border-[teal] rounded-[10px] outline-none color-[teal] px-[10px]"
          />
        </div>
        <div className="flex flex-wrap pt-[80px]  gap-[30px]">
          {data
            .filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase())
            )
            .sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price))
            .map((d) => {
              return (
                <div
                  className="flex flex-col items-center justify-center w-[370px] px-[30px] py-[30px] gap-[50px] shadow-2xl rounded-[10px]"
                  key={d.title}
                >
                  <div>
                    <CgGym className="w-[50px] h-[50px] text-teal-500" />
                  </div>
                  <div className="flex flex-col gap-[30px]">
                    <h2 className="text-center font-[600] text-[18px]">
                      {d.title}
                    </h2>
                    <p className="text-center font-[600]">{d.description}</p>
                    <span className="text-center">{d.price}$</span>
                  </div>
                  <div className="flex gap-[40px] text-[white]">
                    <button
                      onClick={() => delData(d._id)}
                      className="w-[130px] py-[10px] bg-[red] uppercase font-[600] rounded-[10px]"
                    >
                      Delete
                    </button>
                    <button
                      className="w-[130px] py-[10px] bg-[green] uppercase font-[600] rounded-[10px]"
                      onClick={() => navigate(d._id)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
