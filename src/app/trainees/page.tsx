"use client";

import { useState } from "react";
import { Search, Filter, Plus, Trash2, Edit2, ChevronLeft, ChevronRight, MoreHorizontal, Calendar, MapPin, User } from "lucide-react";

type Trainee = {
    id: string;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    status: "Full Time" | "Part Time";
    avatar: string; // Using placeholder or generic
    // Expanded details
    officeLocation?: string;
    teamMates?: string[];
    birthday?: string;
    hrYear?: string;
    address?: string;
};

const TRAINEES_DATA: Trainee[] = [
    {
        id: "1",
        name: "Darlene Robertson",
        position: "Graphics Designer",
        department: "Sales Team",
        email: "alma.lawson@example.com",
        phone: "(252) 555-0126",
        status: "Full Time",
        avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
        id: "2",
        name: "Annette Black",
        position: "Joomla Developer",
        department: "Finances",
        email: "bill.sanders@example.com",
        phone: "(252) 555-0126",
        status: "Part Time",
        avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
        id: "3",
        name: "Ronald Richards",
        position: "Human Resource",
        department: "Management",
        email: "weaver@example.com",
        phone: "(252) 555-0126",
        status: "Full Time",
        avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
        id: "4",
        name: "Ralph Edwards",
        position: "PHP Developer",
        department: "Engineering",
        email: "simmons@example.com",
        phone: "(252) 555-0126",
        status: "Full Time",
        avatar: "https://i.pravatar.cc/150?u=4",
    },
    {
        id: "5",
        name: "Edward John",
        position: "Graphics Designer",
        department: "Sales",
        email: "lawson@example.com",
        phone: "(252) 555-0126",
        status: "Full Time",
        avatar: "https://i.pravatar.cc/150?u=5",
        officeLocation: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        teamMates: ["Ronald Richards", "Floyd Miles", "Savannah Nguyen"],
        birthday: "12/2/1998",
        hrYear: "4 Years",
        address: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
    {
        id: "6",
        name: "Esther Howard",
        position: "UI UX Designer",
        department: "Human Resources",
        email: "roberts@example.com",
        phone: "(252) 555-0126",
        status: "Full Time",
        avatar: "https://i.pravatar.cc/150?u=6",
    },
    {
        id: "7",
        name: "Devon Lane",
        position: "Ux Architect",
        department: "Customer Success",
        email: "tim.jennings@example.com",
        phone: "(252) 555-0126",
        status: "Part Time",
        avatar: "https://i.pravatar.cc/150?u=7",
    },
    {
        id: "8",
        name: "Albert Flores",
        position: "Python Developer",
        department: "Marketing",
        email: "debra.holt@example.com",
        phone: "(252) 555-0126",
        status: "Full Time",
        avatar: "https://i.pravatar.cc/150?u=8",
    },
    {
        id: "9",
        name: "Courtney Henry",
        position: "Freshers",
        department: "Product",
        email: "felicia.reid@example.com",
        phone: "(252) 555-0126",
        status: "Part Time",
        avatar: "https://i.pravatar.cc/150?u=9",
    },
];

export default function TraineesPage() {
    const [expandedRow, setExpandedRow] = useState<string | null>("5"); // Default open for demo
    const [selectedRows, setSelectedRows] = useState<string[]>(["3", "5"]); // Default selected for demo

    const toggleRow = (id: string) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const toggleSelection = (id: string) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Team List</h1>
                    <div className="text-sm text-gray-500 mt-1">
                        <span className="text-blue-500">Admin Dashboard</span>
                        <span className="mx-2">&gt;</span>
                        <span>Team List</span>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-t-xl border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-4 flex-1">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Task"
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">
                        <Filter className="w-4 h-4" />
                    </button>
                    {selectedRows.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                            <div className="bg-blue-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-medium">{selectedRows.length} Selected</span>
                        </div>
                    )}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" />
                    ADD USER
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-b-xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase">
                            <th className="p-4 w-12">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            </th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Position</th>
                            <th className="p-4">Department</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Phone</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-center">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {TRAINEES_DATA.map((trainee) => (
                            <React.Fragment key={trainee.id}>
                                <tr
                                    className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${expandedRow === trainee.id ? 'bg-blue-50/10 border-blue-100' : ''} ${selectedRows.includes(trainee.id) ? 'bg-blue-50/30' : ''}`}
                                >
                                    <td className="p-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(trainee.id)}
                                            onChange={() => toggleSelection(trainee.id)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => toggleRow(trainee.id)}>
                                            <img src={trainee.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                                            <span className="font-medium text-gray-900">{trainee.name}</span>
                                            {expandedRow === trainee.id ? (
                                                <div className="ml-auto text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                                </div>
                                            ) : (
                                                <div className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-600">{trainee.position}</td>
                                    <td className="p-4 text-gray-600">{trainee.department}</td>
                                    <td className="p-4 text-gray-600">{trainee.email}</td>
                                    <td className="p-4 text-gray-600">{trainee.phone}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${trainee.status === 'Full Time'
                                                ? 'bg-emerald-100 text-emerald-600'
                                                : 'bg-amber-100 text-amber-600'
                                            }`}>
                                            {trainee.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-600">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-red-500">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {expandedRow === trainee.id && (
                                    <tr className="bg-white border-b-2 border-blue-500">
                                        <td colSpan={8} className="p-0">
                                            <div className="p-6 grid grid-cols-4 gap-8 text-xs text-gray-500 bg-white">
                                                <div>
                                                    <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                                                        <MapPin className="w-3 h-3 text-gray-400" /> Office Location
                                                    </p>
                                                    <p>{trainee.officeLocation || "N/A"}</p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                                                        <User className="w-3 h-3 text-gray-400" /> Team Mates
                                                    </p>
                                                    <div className="flex flex-col gap-1">
                                                        {trainee.teamMates?.map(mate => (
                                                            <div key={mate} className="flex items-center gap-2">
                                                                <User className="w-3 h-3 text-gray-300" />
                                                                <span>{mate}</span>
                                                            </div>
                                                        )) || "N/A"}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                                                        <Calendar className="w-3 h-3 text-gray-400" /> Birthday
                                                    </p>
                                                    <p>{trainee.birthday || "N/A"}</p>

                                                    <p className="font-semibold text-gray-900 mt-4 mb-1">HR Year</p>
                                                    <p>{trainee.hrYear || "N/A"}</p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                                                    <p>{trainee.address || "N/A"}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 flex justify-end items-center gap-4 text-xs text-gray-500">
                    <span>1 - 9 of 48</span>
                    <div className="flex gap-1">
                        <button className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-50">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-emerald-500 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
