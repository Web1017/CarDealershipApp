// Change nav on scroll
$(function () {
    var header = $(".navbar");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            header.addClass("nav-scrolled");
        } else {
            header.removeClass("nav-scrolled");
        }
    })
});

//First Module
const CreateCars = (() => {
    //Vehicle Data
    const cars = [];

    //Vehicle Class
    class Car {

        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;

        }
    }

    // Vehicle function (to create)
    function makeCar(make, country, img = 'Assets/img/Inventory/CarItem1.jpg', special = true, model = 'new model', price = 20000, type = 'merc', trans = 'automatic', gas) {

        const car = new Car(make, country, img, special, model, type, price, trans, gas);
        cars.push(car)
    }

    // Vehicle Production
    function produceCars() {
        makeCar('Mercedes', 'German', 'Assets/img/Inventory/CarItem1.jpg', true, 'C350 model - Brand New: 2017');
        makeCar('Jeep', 'american', 'Assets/img/Inventory/CarItem2.jpg', true, 'C350 model - Brand New: 2018');
        makeCar('BMW', 'German', 'Assets/img/Inventory/CarItem3.jpg', true, 'C350 model - Brand New: 2019');
        makeCar('Nissan Racer', 'Japanese', 'Assets/img/Inventory/CarItem4.jpg', true, 'GL6 - Used: 2012');
        makeCar('Toyota', 'Japanese', 'Assets/img/Inventory/CarItem5.jpg', true, 'Second model - Used: 2008');

    }

    produceCars();

    //Special Vehicles
    const specialCars = cars.filter(car => car.special === true)


    return {
        cars,
        specialCars
    }

})();
console.log(CreateCars.cars);
console.log(CreateCars.specialCars);

//Second Module
const DisplaySpecialCars = ((CreateCars) => {
    const specialCars = CreateCars.specialCars;

    const info = document.querySelector('.featured-info');

    // Document Loaded event
    document.addEventListener('DOMContentLoaded', () => {
        info.innerHTML = '';
        let data = '';

        specialCars.forEach(item => {
            data += `<!-- Single Item -->
            <div data-img="${item.img}" class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span class="featured-icon mr-2">
                    <i class="fas fa-car"></i>
                </span>
                <h5 class="font-weight-bold mx-1">${item.make}</h5>
                <h5 class=" mx-1">${item.model}</h5>
            </div>
            <!-- End of Single Item -->`
        })
        info.innerHTML = data;
    })

    //Change Image
    info.addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains('featured-item')) {

            const img = event.target.parentElement.dataset.img;
            document.querySelector('.featured-photo').src = img;
        }
    })

})(CreateCars);