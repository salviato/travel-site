import $ from 'jquery';

class Modal {

	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events(); // TGO: Call the events() method //
	}

	events() {
		// Clicking the open modal button //
		this.openModalButton.click(this.openModal.bind(this)); // TGO: Bind is to pass the this value to the openModal() / closeModal() //
		// Clicking the open modal button //
		this.closeModalButton.click(this.closeModal.bind(this)); // TGO: Bind is to pass the this value to the openModal() / closeModal() //
		// Clicking any key //
		$(document).keyup(this.keyPressHandler.bind(this)); // TGO: Keyup is the method to view any key pressed //
	}

	keyPressHandler(e) { // TGO: "e" is the key typed //
		if (e.keyCode == 27) { // TGO: Escape key has the code 27 //
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false; // TGO: This is because is a link and when clicked the page scrolls up. The return false avoid the scroll to up //
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;