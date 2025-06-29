import React from 'react';
import { TrendingUp, DollarSign, CreditCard, Eye, Plus, BarChart3, PieChart, Calendar, Activity, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/90 to-[#0081A7]/5 p-6 ml-0 sm:ml-0 pt-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to <span className="text-[#0081A7]">Expenso</span>
        </h1>
        <p className="text-gray-600">Track your finances with ease and precision</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Income */}
        <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0081A7] to-[#00B4D8] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-[#0081A7]/10 to-[#00B4D8]/10 rounded-xl group-hover:from-[#0081A7]/20 group-hover:to-[#00B4D8]/20 transition-all duration-300 border border-[#0081A7]/20">
                <TrendingUp className="w-6 h-6 text-[#0081A7]" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Income</p>
                <p className="text-3xl font-bold text-[#0081A7]">$12,450</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-[#00B4D8] font-medium">+8.2%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        </div>

        {/* Total Balance */}
        <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8] to-[#0081A7] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-[#00B4D8]/10 to-[#0081A7]/10 rounded-xl group-hover:from-[#00B4D8]/20 group-hover:to-[#0081A7]/20 transition-all duration-300 border border-[#00B4D8]/20">
                <DollarSign className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Balance</p>
                <p className="text-3xl font-bold text-[#00B4D8]">$8,720</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-[#0081A7] font-medium">+12.5%</span>
              <span className="text-gray-500 ml-2">growth this month</span>
            </div>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl group-hover:from-red-100 group-hover:to-pink-100 transition-all duration-300 border border-red-200/50">
                <CreditCard className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Expenses</p>
                <p className="text-3xl font-bold text-red-600">$3,730</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-red-500 font-medium">-2.1%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions Panel */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200/50">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-4">
            <button className="p-4 bg-gradient-to-r from-[#0081A7] to-[#00B4D8] text-white rounded-xl hover:from-[#0081A7]/90 hover:to-[#00B4D8]/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#0081A7]/20">
              <Plus className="w-5 h-5 mx-auto mb-2" />
              <span className="text-sm font-medium">Add Income</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <CreditCard className="w-5 h-5 mx-auto mb-2" />
              <span className="text-sm font-medium">Add Expense</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-[#00B4D8] to-[#0081A7] text-white rounded-xl hover:from-[#00B4D8]/90 hover:to-[#0081A7]/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <Eye className="w-5 h-5 mx-auto mb-2" />
              <span className="text-sm font-medium">View Reports</span>
            </button>
          </div>
        </div>

        {/* Financial Overview - Pie Chart */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Financial Overview</h3>
            <PieChart className="w-5 h-5 text-[#0081A7]" />
          </div>
          <div className="h-48 bg-gradient-to-br from-[#0081A7]/5 to-[#00B4D8]/5 rounded-lg flex items-center justify-center border border-[#0081A7]/10">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-[#0081A7] mx-auto mb-2" />
              <div className="text-[#0081A7] text-sm font-medium">Pie Chart</div>
              <div className="text-gray-500 text-xs">Visualization will go here</div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Recent Transactions</h3>
            <Activity className="w-5 h-5 text-[#0081A7]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#0081A7]/5 to-[#00B4D8]/5 rounded-lg hover:from-[#0081A7]/10 hover:to-[#00B4D8]/10 transition-all duration-200 border border-[#0081A7]/10">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#00B4D8] rounded-full mr-3"></div>
                <span className="text-sm text-gray-700 font-medium">Salary Payment</span>
              </div>
              <span className="text-sm font-semibold text-[#00B4D8]">+$2,500</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50/80 rounded-lg hover:bg-red-50 transition-colors duration-200 border border-red-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700 font-medium">Grocery Shopping</span>
              </div>
              <span className="text-sm font-semibold text-red-600">-$125</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#0081A7]/5 to-[#00B4D8]/5 rounded-lg hover:from-[#0081A7]/10 hover:to-[#00B4D8]/10 transition-all duration-200 border border-[#0081A7]/10">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#0081A7] rounded-full mr-3"></div>
                <span className="text-sm text-gray-700 font-medium">Investment Return</span>
              </div>
              <span className="text-sm font-semibold text-[#0081A7]">+$340</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Expenses */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Recent Expenses</h3>
            <Clock className="w-5 h-5 text-[#0081A7]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50/80 rounded-lg hover:bg-red-50 transition-colors duration-200 border border-red-100">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg mr-3">
                  <CreditCard className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Online Shopping</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-red-600">-$89.99</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50/80 rounded-lg hover:bg-red-50 transition-colors duration-200 border border-red-100">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg mr-3">
                  <CreditCard className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Restaurant Bill</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-red-600">-$45.50</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50/80 rounded-lg hover:bg-red-50 transition-colors duration-200 border border-red-100">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg mr-3">
                  <CreditCard className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Gas Station</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-red-600">-$55.00</span>
            </div>
          </div>
        </div>

        {/* Last 30 Days Expenses - Bar Chart */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Last 30 Days Expenses</h3>
            <BarChart3 className="w-5 h-5 text-[#0081A7]" />
          </div>
          <div className="h-48 bg-gradient-to-br from-[#0081A7]/5 to-[#00B4D8]/5 rounded-lg flex items-center justify-center border border-[#0081A7]/10">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-[#0081A7] mx-auto mb-2" />
              <div className="text-[#0081A7] text-sm font-medium">Bar Chart</div>
              <div className="text-gray-500 text-xs">30-day expense visualization</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gradient-to-r from-[#0081A7]/5 to-[#00B4D8]/5 rounded-lg border border-[#0081A7]/10">
              <p className="text-xs text-gray-500 mb-1">This Week</p>
              <p className="text-lg font-semibold text-[#0081A7]">$485</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-[#00B4D8]/5 to-[#0081A7]/5 rounded-lg border border-[#00B4D8]/10">
              <p className="text-xs text-gray-500 mb-1">Last Week</p>
              <p className="text-lg font-semibold text-[#00B4D8]">$625</p>
            </div>
            <div className="text-center p-3 bg-red-50/80 rounded-lg border border-red-100">
              <p className="text-xs text-gray-500 mb-1">Average</p>
              <p className="text-lg font-semibold text-red-600">$520</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;