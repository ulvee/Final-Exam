import React from "react";
import { Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { cardSchema } from "../schema/ProductForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Helmet} from "react-helmet";

function WeOffer() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cardSchema),
  });

  const postData = async () => {
    const values = getValues();
    await axios.post("http://localhost:8080/cards", {
      title: values.title,
      description: values.description,
      price: values.price,
    });
  };

  return (
    <div>
       <Helmet>
        <title>We Offer</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="max-w-[1200px] flex justify-center h-[80vh] items-center mx-auto">
        <form
          onSubmit={handleSubmit(postData)}
          action=""
          className="max-w-[600px] h-[90%] flex flex-col justify-center"
        >
          <Input
            {...register("title")}
            className="w-[600px] h-[40px] border-[2px] border-[teal] "
            clearable
            bordered
            color="secondary"
            label="Title"
            placeholder="title"
            name="title"
          />
          {errors.title?.message && (
            <p className="text-[red]">{errors.title?.message}</p>
          )}
          <Spacer y={1.5} />
          <Input
            {...register("description")}
            className="w-[600px] h-[40px] border-[2px] border-[teal]"
            clearable
            bordered
            color="secondary"
            label="Description"
            placeholder="description"
            name="description"
          />
          {errors.description?.message && (
            <p className="text-[red]">{errors.description?.message}</p>
          )}
          <Spacer y={1.5} />
          <Input
            {...register("price")}
            className="w-[600px] h-[40px] border-[2px] border-[teal]"
            clearable
            bordered
            color="secondary"
            label="Price"
            placeholder="price"
            name="price"
          />
          {errors.price?.message && (
            <p className="text-[red]">{errors.price?.message}</p>
          )}
          <button
            type="submit"
            className="w-[100%] mt-[40px] h-[40px] bg-teal-700 text-center rounded-[7px] text-[white] uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default WeOffer;
