<div class="ip-input">
  {{#each ip}}
    <input type='number' class='sub' value="{{this}}" maxlength="3" min="0" max="255" /> <em class='split'>.</em>
  {{/each}}
</div>
