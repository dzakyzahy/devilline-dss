import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const load=name=>JSON.parse(readFileSync(new URL('../public/data/'+name,import.meta.url),'utf8'));
const terrain=load('terrain.json'),data=load('evidence.json');
test('expanded DEMNAS grids have consistent geometry and full elevation coverage',()=>{
 for(const key of ['local','regional']){
  const g=terrain[key];
  assert.equal(g.z.length,g.y.length);
  assert.ok(g.z.every(row=>row.length===g.x.length));
  assert.ok(g.x.every((x,i)=>i===0||x>g.x[i-1]));
  assert.ok(g.y.every((y,i)=>i===0||y>g.y[i-1]));
  const cells=g.z.flat();assert.ok(cells.every(z=>Number.isFinite(z)));
  assert.ok(Math.abs(Math.min(...cells)-g.min)<.005);assert.ok(Math.abs(Math.max(...cells)-g.max)<.005);
  for(const c of data.collars)assert.ok(c.e>=g.x[0]&&c.e<=g.x.at(-1)&&c.n>=g.y[0]&&c.n<=g.y.at(-1));
 }
 assert.deepEqual(terrain.regional.bounds,[497500,158500,517500,178500]);
 assert.deepEqual(terrain.local.bounds,[506000,167350,508200,169550]);
});
test('published validation retains complete independent reconciliation',()=>{
 const v=load('validation.json');assert.equal(v.checks,v.passed);assert.deepEqual(v.failures,[]);
 assert.equal(v.mappedRecords,3065);assert.equal(v.mappedCells,23146);
 assert.equal(v.randomStratifiedRecords,355);assert.equal(v.terrainSampleCount,54);
 assert.ok(v.maxTraceErrorM<.002);assert.ok(v.maxAssayPositionErrorM<.002);
});
