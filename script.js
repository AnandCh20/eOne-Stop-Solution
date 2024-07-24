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
        // Remove existing side menu if it exists
        const existingSide = document.getElementById('side');
        if (existingSide) {
            existingSide.remove();
        }
        
        // Create side menu
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
    
        const closeBtn = document.createElement('button');
        closeBtn.id = 'closeBtn';
        closeBtn.textContent = 'X';
        closeBtn.style.borderRadius = '25px';
        closeBtn.style.color = 'white';
        closeBtn.style.backgroundColor = 'transparent';
        topSide.appendChild(closeBtn);
    
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
    
        // Add event listener to close button to remove side menu
        closeBtn.addEventListener('click', function() {
            side.remove();
        });
    
        document.body.addEventListener("click", function (evt) {
            console.dir(this);
            console.log(evt);
            if(evt.target.id == 'menuButton'){
                console.log(evt.target);
            }
            else{
                console.log(evt.target.id);
                side.remove();
            }
        });
    });
    
});
