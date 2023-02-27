// Напишите "if", аналогичный "switch"
// важность: 5
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

const switchToIf = (brow) => {
  if (brow === 'Edge') {
    console.log(`You've got the Edge!`);
  } else if (brow === 'Chrome' || brow === 'Firefox' || brow === 'Safari' || brow === 'Opera') {
    console.log(`Okay we support ${brow} too`);
  } else {
    console.log('We hope that this page looks ok!');
  }
};
switchToIf('Safari');
