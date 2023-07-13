import React from "react";
import Link from "next/link";

const form = ({ type, Post, setPost, submitting, setSubmitting }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">{type} Post</h1>
    </section>
  )
};

export default form;
