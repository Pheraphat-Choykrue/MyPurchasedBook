(function () {
    class Layout {
        constructor() {
            this.btnAdd = document.getElementById("btnAdd");
            this.init()
        }

        init() {
            const thisClass = this;
            this.btnAdd.style.display = "block";
            this.btnAdd.addEventListener("click", (e) => {
                e.preventDefault();
                const AddModal = document.getElementById('AddModal')
                if (AddModal) {
                    $('#AddModal').modal('toggle');
                    if (document.getElementById('AddBookLabel').innerHTML == 'Edit Book') {
                        document.getElementById('AddBookLabel').innerHTML = 'Add Book'
                        document.getElementById('ISBN').disabled = false;
                    }
                }
            });
        }
    }
    new Layout();
})();

