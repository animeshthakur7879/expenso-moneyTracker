import React, { useState } from 'react';
import { TrendingDown, Plus, Calendar, Search, Filter, Download, Edit2, Trash2, Eye, BarChart3, PieChart, CreditCard, AlertCircle } from 'lucide-react';

const ExpensePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  
  const [formData, setFormData] = useState({
    title: '',
    ammount: '',
    category: '',
    description: ''
  });

  // Mock data - replace with your actual data
  const expenseData = [
    { id: 1, title: 'Groceries', ammount: 5000, category: 'Food', date: '2024-07-10', description: 'Monthly grocery shopping' },
    { id: 2, title: 'Rent', ammount: 25000, category: 'Housing', date: '2024-07-08', description: 'Monthly rent payment' },
    { id: 3, title: 'Electricity Bill', ammount: 3500, category: 'Utilities', date: '2024-07-05', description: 'Monthly electricity bill' },
    { id: 4, title: 'Car Maintenance', ammount: 8000, category: 'Transportation', date: '2024-07-03', description: 'Car service and repairs' },
    { id: 5, title: 'Internet Bill', ammount: 2000, category: 'Utilities', date: '2024-07-01', description: 'Monthly internet subscription' },
    { id: 6, title: 'Dining Out', ammount: 3000, category: 'Food', date: '2024-06-30', description: 'Restaurant expenses' },
    { id: 7, title: 'Medical Checkup', ammount: 4500, category: 'Healthcare', date: '2024-06-28', description: 'Annual health checkup' },
  ];

  const categories = ['Food', 'Housing', 'Transportation', 'Utilities', 'Healthcare', 'Entertainment', 'Shopping', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const closeModal = () => setIsOpenModal(false);

  const handleAddExpense = () => {
    console.log('Adding expense:', formData);
    // Add your expense logic here
    closeModal();
    setFormData({
      title: '',
      ammount: '',
      category: '',
      description: ''
    });
  };

  const totalExpense = expenseData.reduce((sum, expense) => sum + expense.ammount, 0);
  const thisMonthExpense = expenseData.filter(expense => 
    new Date(expense.date).getMonth() === new Date().getMonth()
  ).reduce((sum, expense) => sum + expense.ammount, 0);

  const dateToHour = (date) => {
    const createdDate = new Date(date);
    const now = new Date();
    const diffMs = now - createdDate;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    return diffHours;
  };

  const filteredExpenses = expenseData.filter(expense => 
    expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Food': return '🍽️';
      case 'Housing': return '🏠';
      case 'Transportation': return '🚗';
      case 'Utilities': return '⚡';
      case 'Healthcare': return '🏥';
      case 'Entertainment': return '🎬';
      case 'Shopping': return '🛍️';
      default: return '💳';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/90 to-red-50/20 p-6 ml-0 sm:ml-0 pt-20">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Expense <span className="text-red-600">Management</span>
            </h1>
            <p className="text-gray-600">Track and control all your expenses</p>
          </div>
          <button 
            onClick={toggleModal}
            className="mt-4 sm:mt-0 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Expense
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Expenses */}
        <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-xl group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300 border border-red-200/50">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Expenses</p>
                <p className="text-3xl font-bold text-red-600">₹{totalExpense.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-red-500 font-medium">+5.2%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        </div>

        {/* This Month Expenses */}
        <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300 border border-orange-200/50">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-500 mb-1">This Month</p>
                <p className="text-3xl font-bold text-orange-600">₹{thisMonthExpense.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-orange-500 font-medium">+8.1%</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        </div>

        {/* Average Expense */}
        <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-300 border border-yellow-200/50">
                <BarChart3 className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-500 mb-1">Average Expense</p>
                <p className="text-3xl font-bold text-yellow-600">₹{Math.round(totalExpense / expenseData.length).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-yellow-500 font-medium">+2.3%</span>
              <span className="text-gray-500 ml-2">per transaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Alert */}
      

      {/* Filters and Search */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8 border border-gray-200/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Period Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gray-50 text-gray-800 appearance-none"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gray-50 text-gray-800"
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>

          {/* Export Button */}
          <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Expense List */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200/50">
          <h3 className="text-xl font-semibold text-gray-800">Expense Transactions</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-red-50 to-pink-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {filteredExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-red-50/50 transition-all duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-3 text-lg">
                        {getCategoryIcon(expense.category)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{expense.title}</div>
                        <div className="text-sm text-gray-500">{expense.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">
                    -₹{expense.ammount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(expense.date).toLocaleDateString()}
                    <div className="text-xs text-gray-400">{dateToHour(expense.date)} hours ago</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700 transition-colors duration-200">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Expense Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/70 w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Add New Expense
            </h3>

            {/* Modal Form */}
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter expense title"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gray-50 text-gray-800"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gray-50 text-gray-800"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="ammount" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  id="ammount"
                  name="ammount"
                  value={formData.ammount}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gray-50 text-gray-800"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter description (optional)"
                  rows={3}
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gray-50 text-gray-800"
                />
              </div>

              <button
                type="button"
                onClick={handleAddExpense}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensePage;