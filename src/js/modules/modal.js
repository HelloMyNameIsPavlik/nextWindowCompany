const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', (e)=>{
            modal.style.display = 'none';
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e)=>{
            if (e.target === modal){
                modal.style.display = 'none';
                document.body.style.overflow = "";
            }
        });
  }
        
  
  const modalByTheTime = function(modal, time){
            setTimeout(()=>{
                document.querySelector(modal).style.display = "block";
                document.body.style.overflow = "hidden"; 
            }, time)
        };

bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
bindModal('.phone_link', '.popup', '.popup .popup_close');
//modalByTheTime('.popup', 3000)
};

export default modals;