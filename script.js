document.addEventListener("DOMContentLoaded", function () {
    const subMenu = document.getElementById('subMenu');

    // Create and append buttons to subMenu
    for (let i = 1; i <= 6; i++) {
        const button = document.createElement('button');
        button.id = "submenu" + i;
        button.classList.add('submenu-button');
        subMenu.appendChild(button);
    }

    // Function to update submenu text
    const content = [
        ['All Products', 'Clothing', 'Electronics', 'Furniture', 'Shoes', 'Accessories'],
        ['All Products', 'Home', 'About', 'Project', 'Career', 'Contact'],
        ['All Products', 'New Arrivals', 'Best Sellers', 'Sales', 'Customer Service', 'Feedback'],
        ['All Products', 'FAQ', 'Shipping', 'Returns', 'Track Order', 'Support'],
        ['All Products', 'Blog', 'News', 'Events', 'Press', 'Media'],
        ['All Products', 'Profile', 'Settings', 'Orders', 'Wishlist', 'Logout']
    ];

    function updateSubMenuText(index) {
        for (let i = 0; i < 6; i++) {
            document.getElementById('submenu' + (i + 1)).textContent = content[index][i];
        }
    }

    // Add event listeners to menu items using switch case
    const menus = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];
    menus.forEach((menuId, index) => {
        const menu = document.getElementById(menuId);
        menu.addEventListener("mouseover", function () {
            updateSubMenuText(index);
        });
    });


    document.getElementById('menuButton').addEventListener('click', function() {
        const side = document.createElement('div');
        side.id = 'side';
        document.body.appendChild(side);

        const topSide = document.createElement('div');
        topSide.id = 'topSide';
        side.appendChild(topSide);

        const inputBox1 = document.createElement('input');
        inputBox1.id = 'inputBox1';
        inputBox1.type = 'text';
        inputBox1.placeholder = "Search for products";
        topSide.appendChild(inputBox1);

        const sel = document.createElement('select');
        sel.id = 'sel';

        const options = [
            { text: 'All Products', value: 'All Products' },
            { text: 'Clothing', value: 'Clothing' },
            { text: 'Electronics', value: 'Electronics' },
            { text: 'Furniture', value: 'Furniture' }
        ];

        options.forEach(option => {
            const op = document.createElement('option');
            op.textContent = option.text;
            op.value = option.value;
            op.style.fontSize = 'small';
            op.style.width = '50%';
            sel.appendChild(op);
        });

        side.appendChild(sel);
    });
});




































// document.addEventListener("DOMContentLoaded", function () {

//     // Get the subMenu container
//     let subMenu = document.getElementById('subMenu');

//     // Create and append buttons to subMenu
//     for (let i = 1; i <= 6; i++) {
//         const button = document.createElement('button');
//         button.id = "submenu" + i;
//         button.style.backgroundColor = "#22223b";
//         button.style.color = "#f2f2f2";
//         button.style.textAlign = "left";
//         button.style.padding = "8px 0 8px 8px";
//         button.style.margin = "1px";
//         button.style.fontSize = "14px";
//         button.style.border = "none";
//         button.style.borderRadius = "10px 40px 40px 10px";
//         button.style.width = "12vw";
//         button.style.cursor = "pointer"; // Optional: to indicate the button is clickable
        
//         subMenu.appendChild(button);
//     }

//     // Add event listeners to menu items
//     let menu1 = document.getElementById('a1');
//     let menu2 = document.getElementById('a2');
//     let menu3 = document.getElementById('a3');
//     let menu4 = document.getElementById('a4');
//     let menu5 = document.getElementById('a5');
//     let menu6 = document.getElementById('a6');

//     menu1.addEventListener("mouseover", function () {
//         for (let i = 1; i <= 6; i++) {
//             document.getElementById('submenu' + i).textContent = "Menu1";
//         }
//     });

//     // Similarly, add event listeners for other menu items if needed
//     menu2.addEventListener("mouseover", function () {
//         for (let i = 1; i <= 6; i++) {
//             document.getElementById('submenu' + i).textContent = "Menu2";
//         }
//     });

//     menu3.addEventListener("mouseover", function () {
//         for (let i = 1; i <= 6; i++) {
//             document.getElementById('submenu' + i).textContent = "Menu3";
//         }
//     });

//     menu4.addEventListener("mouseover", function () {
//         for (let i = 1; i <= 6; i++) {
//             document.getElementById('submenu' + i).textContent = "Menu4";
//         }
//     });

//     menu5.addEventListener("mouseover", function () {
//         for (let i = 1; i <= 6; i++) {
//             document.getElementById('submenu' + i).textContent = "Menu5";
//         }
//     });

//     menu6.addEventListener("mouseover", function () {
//         for (let i = 1; i <= 6; i++) {
//             document.getElementById('submenu' + i).textContent = "Menu6";
//         }
//     });

//     document.getElementById('menuButton').addEventListener('click', function() {
//         console.log('menubutton')
//         const side = document.createElement('div');
//         side.id = 'side';
//         side.style.position = 'fixed';
//         side.style.top = '0px';
//         side.style.right = '0px';
//         side.style.width = '200px';
//         side.style.height = '100%';
//         side.style.backgroundColor = 'white';
//         side.style.zIndex = '1';
//         side.style.transition = 'all 0.5s ease-in-out';
//         side.style.overflow = 'auto';
//         side.style.display = 'flex';

//         document.body.appendChild(side);

//         const topSide = document.createElement('div');
//         topSide.id = 'topSide';
//         side.appendChild(topSide);
//         topSide.style.width = '100%';
//         topSide.style.height = '50px';
//         topSide.style.backgroundColor = 'black';
//         topSide.style.display = 'flex';
//         topSide.style.justifyContent = 'center'
        
//         const inputBox1 = document.createElement('input');
//         inputBox1.id = 'inputBox1';
//         inputBox1.type='text';
//         inputBox1.placeholder = "Search for products";
//         topSide.appendChild(inputBox1);

//         const sel = document.createElement('select');
//         sel.id = 'sel';
        
//         const op1 = document.createElement('option');
//         op1.textContent = 'All Products';
//         op1.value = 'All Products';
//         op1.style.width='80%';
//         op1.style.fontSize = '1rem';

//         const op2 = document.createElement('option')
//         op2.textContent = 'Clothing';
//         op2.value = 'Clothing';
//         op2.style.width='80%';
//         op2.style.fontSize = '1rem';
        
//         const op3 = document.createElement('option')
//         op3.textContent = 'Electronics';
//         op3.value = 'Electronics';
//         op3.style.width='80%';
//         op3.style.fontSize = '1rem';
        
//         const op4 = document.createElement('option')
//         op4.textContent = 'Furniture';
//         op4.value = 'Furniture';
//         op4.style.width='80%';
//         op4.style.fontSize = '1rem';
        
//         sel.appendChild(op1);
//         sel.appendChild(op2);
//         sel.appendChild(op3);
//         sel.appendChild(op4);

//         side.appendChild(sel);

        
//       });

// });