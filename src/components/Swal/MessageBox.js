import swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const Swal = {
    success: (url) => (
        swal.fire({
            imageUrl: url,
            imageAlt: 'A tall image'
        })
    ),

};
export default Swal;

// export function success() {
//     swal({
//         title: 'Horeee!',
//         text: "transaction was succeed",
//         type: 'success',
//     })
// }

// export function error() {
//     swal({
//         title: 'Oops!',
//         text: "There is something wrong, Please contact IT Care",
//         type: 'error',
//     })
// }

// export function messages(title = null, text = null, type = null, refresh = null) {
//     swal({
//         title: title,
//         text: text,
//         type: type,
//         allowOutsideClick: false
//     }).then(function () {
//         if (refresh)
//             window.location.reload();
//     });
// }

// export function messageHTML(title = null, text = null, type = null, refresh = null) {
//     swal({
//         title: title,
//         html: text,
//         type: type,
//         allowOutsideClick: false,
//         showCloseButton: true,
//     }).then(function () {
//         if (refresh)
//             window.location.reload();
//     });
// }

// export function deleteData(id, confirmDelete) {
//     let result = false;
//     swal({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!'
//     }).then(function (confirm) {
//         confirmDelete(id)
//     })
// }

// export function confirmation(title, text, type, id, confirmAction, dismissAction) {
//     let result = false;
//     swal({
//         title: title,
//         text: text,
//         type: type,
//         showCancelButton: true,
//         confirmButtonText: 'Ya',
//         cancelButtonText: 'Tidak'
//     }).then(function (confirm) {
//         window.location.reload();
//         confirmAction()
//     }, function (dismiss) {
//         dismissAction()
//     })
// }


// export function confirmationNoReload(title, text, type, id, confirmAction, dismissAction, showCancelButton = true) {
//     debugger
//     let result = false;
//     swal({
//         title: title,
//         text: text,
//         type: type,
//         showCancelButton: showCancelButton,
//         allowOutsideClick: false,
//         confirmButtonText: 'Ya',
//         cancelButtonText: 'Tidak'
//     }).then(function (confirm) {
//         // confirmAction(id)   
//         confirmAction()
//     }, function (dismiss) {
//         dismissAction()
//     })
// }

// export function messagesNoAction(title = null, text = null, type = null) {
//     swal({
//         title: title,
//         text: text,
//         type: type,
//         allowOutsideClick: false
//     }).then(function () {

//     });
// }