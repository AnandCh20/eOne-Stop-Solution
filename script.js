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
        const existingSide = document.getElementById('side');
        console.log(existingSide)
        if (!existingSide) {
            const side = document.createElement('div');
            side.id = 'side';
            side.style.position = 'fixed';
            side.style.top = '0px';
            side.style.right = '0px';
            side.style.width = '200px';
            side.style.height = '100%';
            side.style.backgroundColor = 'white';
            side.style.zIndex = '1';
            side.style.transition = 'all 0.5s ease-in-out';
            side.style.overflow = 'auto';
            side.style.display = 'flex';
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

            // Add event listener to hide side menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!side.contains(event.target) && event.target.id !== 'menuButton') {
                    side.remove();
                }
            }, { once: true });
        }
    });
});
