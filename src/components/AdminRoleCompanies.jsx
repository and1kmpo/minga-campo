import { useEffect } from 'react';
import { update_companies, getCompanies } from '../store/actions/companiesAdmin';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const AdminRoleCompanies = ({ companies }) => {
    const dispatch = useDispatch()
    const activeTrue = useSelector(store => store.companyAdmin.companies.all_active)
    /* console.log(activeTrue) */
    const activeFalse = useSelector(store => store.companyAdmin.companies.all_inactive)
    /*   console.log(activeFalse) */

    useEffect(() => {
        dispatch(getCompanies())
    }, [])

    function handleActive(id, change) {
        Swal.fire({
            title: 'Confirmation',
            text: `Are you sure you want to ${change ? 'activate' : 'deactivate'} this company?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(update_companies({ id, change }));
                Swal.fire({
                    title: 'Success',
                    text: 'Company status updated successfully',
                    icon: 'success',
                });
            }
        });
    }

    return (
        <div className="flex justify-center items-center w-[90%]">
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b border-slate-400 text-center">Name</th>
                            <th className="py-2 px-4 border-b border-slate-400 text-center">Website</th>
                            <th className="py-2 px-4 border-b border-slate-400 text-center hidden sm:table-cell">Photo</th>
                            <th className="py-2 px-4 border-b border-slate-400 text-center">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeTrue?.map((company, index) => (
                            <TableRow key={index} company={company} handleActive={handleActive} />
                        ))}
                        {activeFalse?.map((company, index) => (
                            <TableRow key={index} company={company} handleActive={handleActive} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const TableRow = ({ company, handleActive }) => (
    <tr className="bg-white text-center">
        <td className="py-3 px-4 border-b border-slate-400 text-center">
            {company.name} {company.last_name}
        </td>
        <td className="py-3 px-4 border-b border-slate-400 text-center truncate max-w-[120px]">
            {company.website}
        </td>
        <td className="py-3 px-4 border-b border-slate-400 text-center hidden sm:table-cell">
            <img src={company.photo} className="w-8 h-8 rounded-full inline-block" alt="" />
        </td>
        <td className="py-3 px-4 border-b border-slate-400 text-center">
            <label className="relative inline-block w-10 h-5 rounded-full">
                <input
                    type="checkbox"
                    className="peer opacity-0 w-0 h-0"
                    onChange={() => handleActive(company.user_id, !company.active)}
                    defaultChecked={company.active}
                />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bottom-0.5 before:left-0.5 before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-5 peer-checked:bg-primary"></span>
            </label>
        </td>
    </tr>
);

