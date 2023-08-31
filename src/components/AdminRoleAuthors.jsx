import { useEffect } from 'react';
import { update_authors, getAuthors } from '../store/actions/authorsAdmin';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';

export const AdminRoleAuthors = ({ author }) => {
    const dispatch = useDispatch()
    const activeTrue = useSelector(store => store.authorAdmin.authors.all_active)
    /* console.log(activeTrue) */
    const activeFalse = useSelector(store => store.authorAdmin.authors.all_inactive)
    /*   console.log(activeFalse) */

    useEffect(() => {
        dispatch(getAuthors())
    }, [])

    function handleActive(id, change) {
        Swal.fire({
            title: 'Confirmation',
            text: `Are you sure you want to ${change ? 'activate' : 'deactivate'} this author?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(update_authors({ id, change }));
                Swal.fire({
                    title: 'Success',
                    text: 'Author status updated successfully',
                    icon: 'success',
                });
            }
        });
    }

    return (
        <div className="flex justify-center items-center w-[90%]">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b border-slate-400 text-center">Name</th>
                        {/*  <th className="py-2 px-4 border-b border-slate-400 text-center">Created At</th> */}
                        <th className="py-2 px-4 border-b border-slate-400 text-center hidden sm:table-cell">City</th>
                        <th className="py-2 px-4 border-b border-slate-400 text-center">Photo</th>
                        <th className="py-2 px-4 border-b border-slate-400 text-center">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {activeTrue?.map((author, index) => (
                        <TableRow key={index} author={author} handleActive={handleActive} />
                    ))}
                    {activeFalse?.map((author, index) => (
                        <TableRow key={index} author={author} handleActive={handleActive} />
                    ))}
                </tbody>
            </table>
        </div>
    );


};
const TableRow = ({ author, handleActive }) => (
    <tr className="bg-white text-center">
        <td className="py-3 px-4 border-b border-slate-400 text-center">
            {author.name} {author.last_name}
        </td>
        {/* <td className="py-3 px-4 border-b border-slate-400 text-center">
            {moment(author.createdAt).format('DD-MM-YYYY')}
        </td> */}
        <td className="py-3 px-4 border-b border-slate-400 text-center hidden sm:table-cell">
            {author.city}
        </td>
        <td className="py-3 px-4 border-b border-slate-400 text-center">
            <img src={author.photo} className="w-8 h-8 rounded-full inline-block" alt="" />
        </td>
        <td className="py-3 px-4 border-b border-slate-400 text-center">
            <label className="relative inline-block w-10 h-5 rounded-full">
                <input
                    type="checkbox"
                    className="peer opacity-0 w-0 h-0"
                    onChange={() => handleActive(author.user_id, !author.active)}
                    defaultChecked={author.active}
                />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bottom-0.5 before:left-0.5 before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-5 peer-checked:bg-primary"></span>
            </label>
        </td>
    </tr>
);