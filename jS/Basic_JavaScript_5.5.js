function determineDataType() {
    document.getElementById("example-one").innerHTML = typeof "String";
}

function useCoercion() {
    document.getElementById("example-two").innerHTML = "10" + 5;
}

function useAndOperator() {
    document.getElementById("example-three").innerHTML = (10==="Ten") && (10==10);

}

function useOrOperator() {
    document.getElementById("example-four").innerHTML = (10==="Ten") || (10==10);
}

function useNotOperator() {
    document.getElementById("example-five").innerHTML = !(20 > 5);
}