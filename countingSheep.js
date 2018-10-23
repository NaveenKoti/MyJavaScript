<html>

<head>
    <title> Counting Sheep </title>
</head>

<body>
    <input type="file" name="file" id="file">
    <p id="result"></p>
    <script>
        var computationResult = "";
        var div = document.getElementById('result');
        div.innerText = "";
        document.getElementById('file').onchange = function () {
            var file = this.files[0];
            var reader = new FileReader();

            reader.onload = function () {
                var lines = this.result.split('\n');
                var multiplier = 0;
                for (var line = 0; line < lines.length; line++) {
                    if (lines[line] !== "") {
                        var numbersCounted = [];
                        var indicatorForCompletion = false;
                        while (checkAllDigitsPresent(numbersCounted) !== true) {
                            multiplier += 1;
                            var numberProvided = parseInt(lines[line]);
                            numberProvided = numberProvided * multiplier;
                            if (numberProvided === 0) {
                                indicatorForCompletion = true;
                                break;
                            }
                            numbersCounted = bisectNumber(numbersCounted, numberProvided);
                        }
                        if (indicatorForCompletion) {
                            console.log("Case #", line + 1, "Input Number:", lines[line], "Output", "INSOMNIA", line);
                            div.innerText += "Case #" + parseInt(line + 1) + " Input Number:" + lines[line] + " Output:INSOMNIA" + "\n";
                        } else {
                            console.log("Case #", line + 1, "Input Number:", lines[line], "Ouptut", multiplier, line);
                            div.innerText += "Case #" + parseInt(line + 1) + " Input Number:" + lines[line] + " Output:" + multiplier + "\n";
                        }
                        multiplier = 0;
                    }
                }
            };
            reader.readAsText(file);
        };


        function checkAllDigitsPresent(arrayToCheck) {
            if (arrayToCheck.length === 10) {
                return true;
            } else {
                return false;
            }
        }

        function bisectNumber(referenceArray, numberUnderScanner) {
            var numberStroage = [];
            while (numberUnderScanner !== 0) {
                if (numberStroage.indexOf(parseInt(numberUnderScanner % 10)) < 0) {
                    numberStroage.push(parseInt(numberUnderScanner % 10));
                }
                numberUnderScanner = parseInt(numberUnderScanner / 10);
            }
            var arrayComputed = mergeCounter(referenceArray, numberStroage);
            return arrayComputed;
        }

        function mergeCounter(refArray, calArray) {
            for (var x = 0; x < calArray.length; x++) {
                if (refArray.indexOf(calArray[x]) < 0) {
                    refArray.push(calArray[x]);
                }
            }
            return refArray;
        }

    </script>
</body>

</html>
