document.addEventListener("DOMContentLoaded", () => {
	
    const vinShow = document.querySelector('#vinshow');
    vinShow.addEventListener('click', (e) => {
        const vin = document.querySelector('#vin');
        vin.classList.toggle('d-block');
    });

    const btn_warning = document.querySelector('.btn-warning');
    btn_warning.addEventListener('click', (e) => {
        let selectList = document.querySelectorAll('div.m select');
        selectList.forEach((item) => {
            if (item.hasAttribute('required') && !item.value) {
                e.preventDefault();
                item.classList.add('form-invalid');
                console.log(item.selectedOptions);
            } else {
                item.classList.remove('form-invalid');
            }


            item.addEventListener('change', () => {
                item.classList.remove('form-invalid');
            });

        });

        let inputList = document.querySelectorAll('div.m input');
        let btn_pswdx = document.querySelector('.btn-pswdx');
        let u_password = document.querySelector('#u-password');
        inputList.forEach((item) => {
            if (item.hasAttribute('required') && !item.value) {
                item.classList.add('form-invalid');
                item.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`;
                btn_pswdx.style.right = '2.5rem'
            } else if (item.value) {
                item.classList.remove('form-invalid');
            }

            item.addEventListener('change', () => {
                item.classList.remove('form-invalid');
                item.style.backgroundImage = '';
            });

            u_password.addEventListener('change', () => {
                btn_pswdx.style.right = '10px';
            });
        });

    });

});