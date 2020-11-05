$(function() {
    // within form
    // when item is entered and submitted
    // prevent default (so added item does not disappear)
    // newItem is added (append) to the bottom of the shopping list
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        var newItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
    });

    // check and uncheck items
    // within shopping list if check is clicked
    // go to closest li, find shopping item, toggleClass checked
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    // for toggleClass('CLASS NAME') -- does not need the .period before the class name

    // permanently remove items
    // within shopping list if delete is clicked
    // remove li
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).parent().parent().remove();
    });
});

// REQUIREMENTS
// enter items they need to purchase by entering text
// and hitting RETURN key or clicking ADD ITEM button
// check and uncheck items on the list by clicking the CHECK button
// permanently remove items from the list by clicking the DELETE button
