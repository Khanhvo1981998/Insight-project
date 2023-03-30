import { FilterOutlined } from '@ant-design/icons';
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import "../DoiSoatVe/DoiSoatVe.css"
import { data } from '../../data';

export default function DoiSoatVe() {
    const newData = data.filter(item => item.checked === false)
    const renderDanhSachVe = () => {
        return newData.map((item, index) => {
            console.log({ item });
            return (
                <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap ">
                            {item.stt}
                        </td>

                        <td class="px-2 py-3">
                            {item.ticketNumber}
                        </td>

                        <td class="px-4 py-4">
                            {item.dateUsed}
                        </td>

                        <td class="px-4 py-3 ">
                            {item.ticketType}
                        </td>
                        <td class=" px-4 py-3">
                            {item.checkin}
                        </td>
                        <td class=" px-4 py-3">
                            {(!item.checked) ? <i>Chưa đối soát</i> : ""}
                        </td>
                    </tr>

                </>
            )

        })

    }
    return (
        <div className=" ticket-checked">
            <div className='pt-3 text-3xl font-bold '>
                <h1>Đối soát vé</h1>
            </div>
            <div className='flex justify-between mt-2 '>
                <div className='search'>
                    <input className='' type="search" placeholder='Tìm bằng số vé' />
                    <AiOutlineSearch className='search-icon' />
                </div>
                <div className="flex button-content">

                    <button className="checked">Chốt đối soát</button>
                </div>
            </div>

            <div class="relative overflow-x-auto mt-3  rounded-t-xl pb-6 ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="table-header text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class=" px-6 py-3 w-4">
                                STT
                            </th>

                            <th scope="col" class=" px-6 py-3 pl-3">
                                Số vé
                            </th>
                            <th scope="col" class=" px-6 py-3">
                                Ngày sử dụng
                            </th>
                            <th scope="col" class=" px-6 py-3">
                                Tên loại vé
                            </th>
                            <th scope="col" class=" px-6 py-3">
                                Cổng check - in
                            </th>
                            <th scope="col" class=" px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderDanhSachVe()}
                    </tbody>

                </table>
            </div>


        </div>
    )
}
