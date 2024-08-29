import React from 'react';
import { Line } from 'rc-progress';

export default function FisrtList() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
      <div className="space-y-1">
        <h1 className="font-medium text-lg pl-4">Your Performance</h1>
        <p className="text-xs text-slate-600 pl-4">See which topics you are doing best in below</p>
        <div className="flex items-center mx-4 bg-slate-100 p-2 rounded-md ">
          <input
            type="text"
            className="bg-slate-100 w-full h-8 text-black rounded-md pl-3"
            placeholder="Search"
          />
          <button className="px-3 bg-slate-100 w-10 h-8 rounded-md">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <ul className="space-y-2 mt-2">
        <li className="space-y-1">
          <div className="flex justify-between ">
            <div>
              <p className="font-medium text-sm pl-4">Aircraft Structure</p>
              <p className="text-slate-600 text-xs pl-4">Intermediate</p>
            </div>
            <div className="text-2xl pr-5">></div>
          </div>
          <Line percent={50} strokeColor="orange" strokeWidth={2} trailWidth={2}  className='w-11/12 mx-auto'/>
        </li>
        <hr className="w-full" />
        <li className="space-y-2 ">
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-sm pl-4">Regulation</p>
              <p className="text-slate-600 text-xs pl-4">Novice</p>
            </div>
            <div className="text-2xl pr-5">></div>
          </div>
          <Line percent={30} strokeColor="red" strokeWidth={2} trailWidth={2} className='w-11/12 mx-auto' />
        </li>
        <hr className="w-full" />
        <li className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-sm pl-4">Aircraft Structure</p>
              <p className="text-slate-600 text-xs pl-4">Intermediate</p>
            </div>
            <div className="text-2xl pr-5">></div>
          </div>
          <Line percent={50} strokeColor="orange" strokeWidth={2} trailWidth={2} className='w-11/12 mx-auto'/>
        </li>
        <hr className="w-full" />
        <li className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-sm pl-4">Instruments</p>
              <p className="text-slate-600 text-xs pl-4">Expert</p>
            </div>
            <div className="text-2xl pr-5">></div>
          </div>
          <Line percent={100} strokeColor="#009999" strokeWidth={2} trailWidth={2} className='w-11/12 mx-auto'/>
        </li>
        <hr className="w-full" />
        <li className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-sm pl-4">Airodynamics</p>
              <p className="text-slate-600 text-xs pl-4">Expert</p>
            </div>
            <div className="text-2xl pr-5">></div>
          </div>
          <Line percent={100} strokeColor="#009999" strokeWidth={2} trailWidth={2} className='w-11/12 mx-auto'/>
        </li>
      </ul>
    </div>
  );
}