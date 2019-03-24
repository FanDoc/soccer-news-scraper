$(document).ready(function() {
  $(".delete-article").on("click", deleteArticle);
  $(".save-article").on("click", showSaveModal);

  // Delete an article from the database and the DOM when clicked.
  function deleteArticle() {
    const id = $(this).data("id");
    const thisCard = $(this).parents(".card");
    thisCard.remove();

    $.ajax({
        type: "DELETE",
        url: `/api/article/${id}`,
    }).then(data => console.log(data));
  }

  function showSaveModal() {
    $(".modal").modal("show");
  }
});
