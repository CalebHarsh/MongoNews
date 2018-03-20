$("#scrape").on("click", e => {
  console.log("scrape")
  $.ajax({
    url: "/scrape",
    method: "GET"
  }).done(data => {
    console.log(data)
    $('#scrapedModal').modal('show')
    window.location.href = "/home"
  })
})

$(".save").on("click", function (event) {
  const id = $(this).data("id")
  $.ajax({
    url: `/save/${id}`,
    method: "PUT"
  }).done(data => window.location.href = "/home")
})

$(".remove").on("click", function (event) {
  const id = $(this).data("id")
  $.ajax({
    url: `/remove/${id}`,
    method: "PUT"
  }).done(data => window.location.href = "/home")
})
