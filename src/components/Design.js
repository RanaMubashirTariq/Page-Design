import React from 'react';
import FisrtList from './FisrtList';
import SecondList from './SecondList';
import ThirdList from './ThirdList';

export default function Design() {
  return (
    <div className="h- w-screen">
      <div className="flex flex-col lg:flex-row justify-between bg-white w-11/12 mx-auto">
        <div className="text-black w-full lg:w-80 h-auto lg:h-40 bg-white mx-5 py-3 rounded-lg">
          <div className="flex flex-col lg:flex-row justify-evenly items-center">
            <div className="w-9 h-9 rounded-full bg-slate-400 text-2xl flex items-center justify-center mt-6 mr-4 -ml-0.5">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="text-4xl w-12 h-12 rounded-full bg-yellow-100 mt-4 flex items-center justify-center mr-4">👱</div>
            <div className="text-center lg:text-left">
              <h2 className="font-semi text-xl">Johann Beishline</h2>
              <p className="text-slate-400 text-base">100090781</p>
              <p className="text-slate-400 text-base">johan,b@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white rounded-3xl px-3 py-1 mx-3 mb-2 -ml-0.5 lg:mb-0">Performance</button>
            <button className="rounded-3xl bg-slate-300 px-3 py-1">Badges</button>
          </div>
        </div>

        <div className="mt-4 bg-yellow-100 w-full lg:w-52 h-auto lg:h-24 rounded-md mx-4">
          <div className="flex justify-center pt-6">
            <div>
              <i className="fa-solid fa-star text-yellow-300 mr-2" />
            </div>
            <div>
              <p className="text-slate-600 float-right ml-2">Your Level</p>
            </div>
          </div>
          <div className="font-medium text-xl text-center lg:text-left pl-0 lg:pl-10 mt-2">
            <h1>Intermediate</h1>
          </div>
        </div>

        <div className="mt-4 bg-green-100 w-full lg:w-52 h-auto lg:h-24 rounded-md mx-4 box-border">
          <div className="flex justify-center pt-6">
            <div className="w-6 h-6 rounded-full bg-slate-400 px-1 text-base flex items-center justify-center">
              <i className="fa-solid fa-check" />
            </div>
            <div>
              <p className="text-slate-600 float-right ml-2 text-base">Final Exam Score</p>
            </div>
          </div>
          <div className="font-medium pl-0 lg:pl-16 mt-2 text-2xl text-center lg:text-left">
            <h1>82</h1>
          </div>
        </div>

        <div className="mt-4 bg-pink-100 w-full lg:w-52 h-auto lg:h-24 rounded-md mx-4">
          <div className="flex justify-center pt-6">
            <div>
              <i className="fa-solid fa-clock-rotate-left text-red-500 mr-2 " />
            </div>
            <div>
              <p className="text-slate-600 float-right ml-2">Total Attempts</p>
            </div>
          </div>
          <div className="font-medium pl-0 lg:pl-16 mt-2 text-2xl text-center lg:text-left">
            <h1>32</h1>
          </div>
        </div>

        <div className="mt-4 bg-blue-100 w-full lg:w-52 h-auto lg:h-24 rounded-md mx-4">
          <div className="flex justify-center pt-5">
            <div className="text-2xl -rotate-45">〰️</div>
            <div>
              <p className="text-slate-600 float-right ml-2 pt-1">Average Score</p>
            </div>
          </div>
          <div className="font-medium pl-0 lg:pl-16 text-2xl mt-2 text-center lg:text-left">
            <h1>77.6</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mt-0.5">
        <FisrtList />
        <SecondList />
        <ThirdList />
      </div>
    </div>
  );
}