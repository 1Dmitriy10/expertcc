import $ from "jquery";

export function customCheckbox() {
$(".business-aside__main-present-check").on("click", function() {
    if($(this).is(":checked")) {
        $(this).parent().addClass("check");
    }else{
        $(this).parent().removeClass("check");
    }
})
};
customCheckbox();