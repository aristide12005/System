"use client";

import { useState } from "react";
import { Search, Filter, Plus, Trash2, Edit2, ChevronLeft, ChevronRight, MoreHorizontal, Calendar, MapPin, User, Mail, Phone, Send } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

type Grade = {
    subject: string;
    score: number;
    grade: string;
};

type ChartData = {
    month: string;
    performance: number;
};

type Trainee = {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: "Active" | "Inactive";
    avatar: string;
    // Expanded details
    position?: string;
    department?: string;
    officeLocation?: string;
    teamMates?: string[];
    birthday?: string;
    hrYear?: string;
    address?: string;
    // New Expanded Data
    grades?: Grade[];
    performanceData?: ChartData[];
};

const MOCK_GRADES: Grade[] = [
    { subject: "React.js", score: 85, grade: "A" },
    { subject: "UI Design", score: 92, grade: "A+" },
    { subject: "Backend", score: 78, grade: "B+" },
    { subject: "Database", score: 88, grade: "A" },
];

const MOCK_PERFORMANCE: ChartData[] = [
    { month: 'Jan', performance: 65 },
    { month: 'Feb', performance: 75 },
    { month: 'Mar', performance: 85 },
    { month: 'Apr', performance: 70 },
    { month: 'May', performance: 90 },
    { month: 'Jun', performance: 95 },
];

const TRAINEES_DATA: Trainee[] = [
    {
        id: "1",
        name: "Darlene Robertson",
        position: "Graphics Designer",
        department: "Sales Team",
        email: "alma.lawson@example.com",
        phone: "(252) 555-0126",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?u=1",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "2",
        name: "Annette Black",
        position: "Joomla Developer",
        department: "Finances",
        email: "bill.sanders@example.com",
        phone: "(252) 555-0126",
        status: "Inactive",
        avatar: "https://i.pravatar.cc/150?u=2",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "3",
        name: "Ronald Richards",
        position: "Human Resource",
        department: "Management",
        email: "weaver@example.com",
        phone: "(252) 555-0126",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?u=3",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "4",
        name: "Ralph Edwards",
        position: "PHP Developer",
        department: "Engineering",
        email: "simmons@example.com",
        phone: "(252) 555-0126",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?u=4",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "5",
        name: "Edward John",
        position: "Graphics Designer",
        department: "Sales",
        email: "lawson@example.com",
        phone: "(252) 555-0126",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?u=5",
        officeLocation: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        teamMates: ["Ronald Richards", "Floyd Miles", "Savannah Nguyen"],
        birthday: "12/2/1998",
        hrYear: "4 Years",
        address: "4140 Parker Rd. Allentown, New Mexico 31134",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "6",
        name: "Esther Howard",
        position: "UI UX Designer",
        department: "Human Resources",
        email: "roberts@example.com",
        phone: "(252) 555-0126",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?u=6",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "7",
        name: "Devon Lane",
        position: "Ux Architect",
        department: "Customer Success",
        email: "tim.jennings@example.com",
        phone: "(252) 555-0126",
        status: "Inactive",
        avatar: "https://i.pravatar.cc/150?u=7",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "8",
        name: "Albert Flores",
        position: "Python Developer",
        department: "Marketing",
        email: "debra.holt@example.com",
        phone: "(252) 555-0126",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?u=8",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
    {
        id: "9",
        name: "Courtney Henry",
        position: "Freshers",
        department: "Product",
        email: "felicia.reid@example.com",
        phone: "(252) 555-0126",
        status: "Inactive",
        avatar: "https://i.pravatar.cc/150?u=9",
        grades: MOCK_GRADES,
        performanceData: MOCK_PERFORMANCE,
    },
];

const ITEMS_PER_PAGE = 5;

export default function TraineesPage() {
    const [expandedRow, setExpandedRow] = useState<string | null>("5");
    const [selectedRows, setSelectedRows] = useState<string[]>(["3", "5"]);
    const [currentPage, setCurrentPage] = useState(1);

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

    // Pagination Logic
    const totalPages = Math.ceil(TRAINEES_DATA.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentTrainees = TRAINEES_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
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
                            <th className="p-4">Status</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Phone</th>
                            <th className="p-4 text-center">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {currentTrainees.map((trainee) => (
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
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${trainee.status === 'Active'
                                                ? 'bg-emerald-100 text-emerald-600'
                                                : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            {trainee.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600">{trainee.email}</td>
                                    <td className="p-4 text-gray-600">{trainee.phone}</td>
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
                                        <td colSpan={6} className="p-0">
                                            <div className="p-6 grid grid-cols-12 gap-6 text-sm bg-white">
                                                {/* Chart Section */}
                                                <div className="col-span-4 border rounded-xl p-4 shadow-sm">
                                                    <h4 className="font-semibold text-gray-900 mb-4">Performance Chart</h4>
                                                    <div className="h-40 w-full">
                                                        <ResponsiveContainer width="100%" height="100%">
                                                            <AreaChart data={trainee.performanceData}>
                                                                <defs>
                                                                    <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                                                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                                                    </linearGradient>
                                                                </defs>
                                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                                                                <YAxis hide />
                                                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                                                                <Area type="monotone" dataKey="performance" stroke="#3B82F6" fillOpacity={1} fill="url(#colorPerf)" />
                                                            </AreaChart>
                                                        </ResponsiveContainer>
                                                    </div>
                                                </div>

                                                {/* Send Message Section */}
                                                <div className="col-span-4 border rounded-xl p-4 shadow-sm flex flex-col">
                                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                        <Mail className="w-4 h-4 text-blue-500" /> Send Message
                                                    </h4>
                                                    <textarea
                                                        className="w-full h-full p-3 bg-gray-50 rounded-lg border-none focus:ring-1 focus:ring-blue-500 outline-none resize-none text-sm text-gray-600 mb-3"
                                                        placeholder={`Write a message to ${trainee.name}...`}
                                                    ></textarea>
                                                    <div className="flex justify-end">
                                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
                                                            <Send className="w-3 h-3" /> Send
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Grades Section */}
                                                <div className="col-span-4 border rounded-xl p-4 shadow-sm">
                                                    <h4 className="font-semibold text-gray-900 mb-4">Recent Grades</h4>
                                                    <div className="space-y-3">
                                                        {trainee.grades?.map((grade, index) => (
                                                            <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                                                <span className="text-gray-600 font-medium">{grade.subject}</span>
                                                                <div className="flex items-center gap-3">
                                                                    <span className="text-gray-400 text-xs">{grade.score}%</span>
                                                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${grade.grade.startsWith('A') ? 'bg-green-100 text-green-600' :
                                                                            grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-600' :
                                                                                'bg-yellow-100 text-yellow-600'
                                                                        }`}>
                                                                        {grade.grade}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
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
                    <span>{startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, TRAINEES_DATA.length)} of {TRAINEES_DATA.length}</span>
                    <div className="flex gap-1">
                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                            className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
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
