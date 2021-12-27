# What it is and why to use it?

SonarQube is a universal tool for static code analysis that has become more or less the industry standard. Keeping code clean, simple, and easy to read is also a lot easier with SonarQube.

## Benefits of SonarQube

1. Sustainability - Reduces complexity, possible vulnerabilities, and code duplications, optimising the life of applications.

2. Increase productivity - Reduces the scale, cost of maintenance, and risk of the application; as such, it removes the need to spend more time changing the code.

3. Quality code - Code quality control is an inseparable part of the process of software development.

4. Detect Errors - Detects errors in the code and alerts developers to fix them automatically before submitting them for output.

5. Increase consistency - Determines where the code criteria are breached and enhances the quality

6. Business scaling - No restriction on the number of projects to be evaluated.

7. Enhance developer skills - Regular feedback on quality problems helps developers to improve their coding skills

## How to setup and use the sonarqube plugin

This section will explain the steps or procedures to configure the sonarqube plugin for all the major programming languages.

Prerequisites:
The only prerequisite for running SonarQube is to have Java (Oracle JRE 11 or OpenJDK 11) installed on your machine.

Set the PATH system variable: (https://www.java.com/en/download/help/path.xml)[https://www.java.com/en/download/help/path.xml]

Note: In order to analyze JavaScript code, you need to have Node.js >= 8 installed on the machine running the scan. If a standard node is not available, you have to set the property sonar.nodejs.executable to an absolute path to Node.js executable.
