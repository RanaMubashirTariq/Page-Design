import React from 'react';

export default function SecondList() {
  return (
    <div className="bg-white shadow-lg  rounded-lg p-6 w-full lg:w-1/4">
      <ul className="space-y-4">
        <li className="flex justify-between">
          <div>
            <p className="font-medium text-sm pl-2">Quiz #1</p>
            <p className="text-slate-600 text-xs  pl-2">Total attempt: 3</p>
          </div>
          <div className="text-2xl pr-2">></div>
        </li>
        <hr className="w-full" />
        <li className="flex justify-between">
          <div>
            <p className="font-medium text-sm  pl-2">Quiz #2</p>
            <p className="text-slate-600 text-xs  pl-2">Total attempt: 8</p>
          </div>
          <div className="text-2xl pr-2">></div>
        </li>
        <hr className="w-full" />
        <li className="flex justify-between">
          <div>
            <p className="font-medium text-sm  pl-2">Quiz #3</p>
            <p className="text-slate-600 text-xs  pl-2">Total attempt: 6</p>
          </div>
          <div className="text-2xl pr-2">></div>
        </li>
        <hr className="w-full" />
        <li className="flex justify-between">
          <div>
            <p className="font-medium text-sm  pl-2">Quiz #4</p>
            <p className="text-slate-600 text-xs  pl-2">Total attempt: 7</p>
          </div>
          <div className="text-2xl pr-2">></div>
        </li>
      </ul>
    </div>
  );
}