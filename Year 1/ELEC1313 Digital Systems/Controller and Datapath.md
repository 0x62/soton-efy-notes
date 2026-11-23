---
permalink: y1/elec1313/controller-and-datapath
---
#### Controller and Datapath

This follows the counters and two-process state machines in [[SystemVerilog Sequential Design]].[^seq3]

## Assign each job to the right block

A **controller** is a finite-state machine that decides which operation happens next. A **datapath** holds and transforms the data: it contains registers, counters, multiplexers or arithmetic units. The controller sends control signals such as load, clear or enable. The datapath sends status signals such as zero, ready or count reached. The split is a design choice: include in the controller the states needed to sequence behaviour, not one state for every possible data value.

## Read register-transfer notation at the edge

$R\leftarrow S$ says “load $R$ with the value of $S$ at the active edge”; $R$ otherwise holds its previous value. A condition such as ‘if load, $R\leftarrow S$’ maps to register enable. If a clock edge exchanges two registers, both next values come from the values **before** the edge. That is the behaviour modelled by nonblocking assignments in the sequential block.

| Cycle event | Controller output | Expected datapath result |
| --- | --- | --- |
| Start | Load | Store the input count |
| Run | Count-enable | Decrement once per active edge while the count is nonzero |
| Counter reaches zero | Stop issuing count-enable | Keep zero; report done according to the interface |

For an input count of 2, the test trace should show 2 after load, then 1 and 0 after the next two enabled edges. If zero is a combinational datapath status, it becomes true after the edge that loads zero; a controller's registered transition based on it can happen at the **following** edge. Gate the decrement when the count is already zero to prevent underflow in that intervening cycle. State the intended interface latency instead of guessing whether completion is same-cycle.

## Verify expected behaviour before looking at a trace

The lecture separates stimulus generation from response checking. For a sequential design, plan reset, hold, normal update and endpoint cases. For each active edge, write down the inputs before the edge and the expected register values after the update. Change ordinary stimulus away from the sampling edge so a check does not depend on race ordering. Drive each input from one source only.

For the two-count example, test reset, loading 2, holding while enable is low, exactly two enabled decrements, and preservation of zero when disabled. This is a concrete expected trace, not an implementation of the lab.

[^seq3]: Mark Zwolinski, [SystemVerilog for Sequential Design (3)](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36378), sections 7.1 (general sequential systems, controller/datapath, register transfer) and 7.2 (stimulus and response checks, clock and reset). The excluded universal shift-register exercise is not used.
