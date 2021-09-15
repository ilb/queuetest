import delay from 'delay';
import PQueue from 'p-queue';
import PriorityQueueEx from './PriorityQueueEx.mjs';

const queue = new PQueue({ concurrency: 2, queueClass: PriorityQueueEx });

let count = 0;
queue.on('active', () => {
  console.log(`Working on item #${++count}.  Size: ${queue.size}  Pending: ${queue.pending}`);
  console.log('size by on active', queue.sizeBy({ uid: '341a0c1b-147a-4b8e-9b9d-186773918a25' }));
});

const options = { uid: '341a0c1b-147a-4b8e-9b9d-186773918a25' };
queue.add(() => Promise.resolve(), options);
console.log('size by on 1', queue.sizeBy({ uid: '341a0c1b-147a-4b8e-9b9d-186773918a25' }));
queue.add(() => delay(2000), options);
console.log('size by on 2', queue.sizeBy({ uid: '341a0c1b-147a-4b8e-9b9d-186773918a25' }));
queue.add(() => Promise.resolve(), options);
console.log('size by on 3', queue.sizeBy({ uid: '341a0c1b-147a-4b8e-9b9d-186773918a25' }));
queue.add(() => Promise.resolve()), options;
console.log('size by on 4', queue.sizeBy({ uid: '341a0c1b-147a-4b8e-9b9d-186773918a25' }));
queue.add(() => delay(500), options);
console.log('size by on 5', queue.sizeBy({ uid: '341a0c1b-147a-4b8e-9b9d-186773918a25' }));
