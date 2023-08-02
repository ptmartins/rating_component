(function () {

    const body = document.body;

    /**
    * DOM object
    */
    const DOM = {};

    /**
    * View object
    */
    const view = {
        notification: rating => {
            const notification = document.createElement('DIV'),
                image = document.createElement('IMG'),
                yourRating = document.createElement('P'),
                thankYou = document.createElement('H1'),
                txt = document.createElement('P');

            notification.className = 'notification';
            image.className = 'notification__image';
            yourRating.className = 'notification__yourRating';
            thankYou.className = 'notification__thankYou';
            txt.className = 'notification__txt';

            image.setAttribute('src', '../images/illustration-thank-you.svg');
            yourRating.textContent = `You selected ${rating} out of 5`;
            thankYou.textContent = `Thank you!`;
            txt.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;

            notification.append(image, yourRating, thankYou, txt);

            body.addEventListener('keydown', closeNotification);

            return notification;
        }
    };

    /**
    * Show notification
    */
    const showNotification = rating => {

        const notification = view.notification(rating);

        if (!DOM.card.classList.contains('js-hidden')) {
            DOM.card.classList.add('js-hidden');
        }

        body.appendChild(notification);
        DOM.notification = notification;
    }

    /**
    * Close notification
    */
    const closeNotification = ev => {
        console.log(89898);
        if (ev.key === 'Escape' && DOM.notification) {
            body.removeChild(DOM.notification);
            DOM.notification = null;

            if (DOM.card.classList.contains('js-hidden')) {
                DOM.card.classList.remove('js-hidden');
            }
        }

        body.removeEventListener('keydown', closeNotification);
    };

    /**
    * Cache DOM elements
    */
    const cacheDOM = () => {
        DOM.card = document.querySelector('.card');
        DOM.ratings = document.getElementsByClassName('rating');
    };

    /**
    * Set rating
    */
    const setRating = ev => {
        let rating = ev.target.getAttribute('data-score');
        showNotification(rating);
    };

    /**
    * Setup events
    */
    const setupEvents = () => {
        for (let i = 0; i < DOM.ratings.length; i++) {
            DOM.ratings[i].addEventListener('click', setRating);
        }
    };

    /**
    * Kick-off logic
    */
    const init = () => {
        cacheDOM();
        setupEvents();
    };

    window.addEventListener('DOMContentLoaded', init);
})();
