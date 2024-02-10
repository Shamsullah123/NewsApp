import React, { useState, useEffect } from "react";
import Thumnail from "./Thumnail";
import FlipMove from "react-flip-move";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ComboBox from "./Combo";
import Combobydate from "./Combobydate";
import CombobySource from "./CombobySource";

const Result = ({ results }) => {
  // State variables
  const [resulted, setresulted] = useState(results.articles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [SelectedDate, setSelectedDate] = useState("");
  const [SelectedSource, setSelectedSource] = useState("");

  // Effect to update resulted when results.articles changes
  useEffect(() => {
    setresulted(results.articles);
  }, [results.articles]);

  // Effect to filter articles based on search term
  useEffect(() => {
    if (!searchTerm) {
      setresulted(results.articles); // Reset to original articles if search term is empty
    } else {
      const filteredArticles = results.articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setresulted(filteredArticles);
    }
  }, [searchTerm, results.articles]);

  // Effect to filter articles based on selected author
  useEffect(() => {
    if (!selectedAuthor) {
      setresulted(results.articles); // Reset to original articles if no author is selected
    } else {
      const filterByAuthor = results.articles.filter(
        (item) =>
          item.author &&
          item.author.toLowerCase().includes(selectedAuthor.toLowerCase())
      );
      setresulted(filterByAuthor);
    }
  }, [selectedAuthor, results.articles]);

  useEffect(() => {
    if (!SelectedDate) {
      setresulted(results.articles);
    } else {
      const filterByDate = results.articles.filter(
        (date) => date.publishedAt && date.publishedAt.includes(SelectedDate)
      );
      setresulted(filterByDate);
    }
  }, [SelectedDate, results.articles]);

  useEffect(() => {
    
    if (!SelectedSource) {
      setresulted(results.articles);
    } else {
      const filterBySorce = results.articles.filter(
        (sourced) =>
        // console.log("Source.name", sourced.source.name)
          sourced.source.name.toLowerCase() &&
          sourced.source.name.toLowerCase().includes(SelectedSource.toLowerCase())
      );
      setresulted(filterBySorce);
    }
  }, [SelectedSource, results.articles]);

  return (
    <>
      <div className="flex flex-row justify-center mt-2 ml-4 ">
        <div className="bg-transparent">
          <MagnifyingGlassIcon className="h-6 w-6 text-white justify-items-center mr-3 mt-2" />
        </div>
        <input
          type="text"
          placeholder="Search by Keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2 text-white bg-transparent justify-items-center outline-none"
        />
        <ComboBox
          options={results.articles.map((article) => article.author)}
          onSelect={setSelectedAuthor}
        />
        <Combobydate
          options={results.articles.map((article) => article.publishedAt)}
          onSelect={setSelectedDate}
        />
        <CombobySource
          options={results.articles.map((article) => article.source.name)}
          onSelect={setSelectedSource}
        />
      </div>
      <FlipMove className="flex-wrap justify-center mx-5 my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
        {resulted?.map((result) => (
          <Thumnail key={result.id} result={result} />
        ))}
      </FlipMove>
    </>
  );
};

export default Result;
